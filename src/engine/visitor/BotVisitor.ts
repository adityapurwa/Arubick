import { ArubickVisitor } from '../../antlr/ArubickVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import {
  StorageContext,
  DefStorageContext,
  VariableContext,
  DefVariableContext,
  AccessVariableContext,
  AssignContext,
  MethodParametersContext,
  MethodCallContext,
  ComparisonContext,
  ExpressionContext,
  ArrayContext,
  ElseStatementContext,
  IfStatementContext,
  StatementContext,
  BotDefinitionContext,
  MainContext,
  ProgramContext
} from '../../antlr/ArubickParser';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

interface IMap<T> {
  [key: string]: T;
}

interface IStorage {
  key: string;
  subKey: string;
  value: ExpressionContext;
}

interface IStorageContainer extends IMap<IStorage> {}

interface IStorageData {
  entity: IStorageContainer;
  intent: IStorageContainer;
  ext: IStorageContainer;
}

interface IMetadata {
  name: string;
  version: string;
}

interface IVariable {
  name: string;
  value: ExpressionContext;
}
interface IVariableContainer extends IMap<IVariable> {}

interface IBotData {
  storage: IStorageData;
  metadata: IMetadata;
  globals: IVariableContainer;
}

export default class BotVisitor extends AbstractParseTreeVisitor<any>
  implements ArubickVisitor<any> {
  private botData: IBotData;

  constructor() {
    super();
    this.botData = {
      storage: {
        entity: {},
        intent: {},
        ext: {}
      },
      globals: {},
      metadata: {
        name: null,
        version: null
      }
    };
  }
  public visitBotDefinition(ctx: BotDefinitionContext) {
    const metadata: IMetadata = {
      name: ctx.ID().text,
      version: ctx.NUMBER().join('.')
    };
  }

  public visitDefStorage(ctx: DefStorageContext) {
    const storageId = ctx.storage().ID();
    const key = storageId.shift().text;
    const subKey = storageId.shift().text;
    switch (key) {
      case 'intent':
        this.botData.storage.intent[subKey] = null;
        break;
      case 'entity':
        this.botData.storage.entity[subKey] = null;
        break;
      case 'ext':
        this.botData.storage.ext[subKey] = null;
        break;
      default:
        throw new Error('Invalid storage type');
    }
  }

  public visitAssign(ctx: AssignContext) {
    const storage = ctx.storage();
    const defStorage = ctx.defStorage();
    // Assigning to storage is different compared to var
    if (storage || defStorage) {
      const storageId = storage ? storage.ID() : defStorage.storage().ID();
      const key = storageId.shift().text;
      const subKey = storageId.shift().text;
      // TODO smelly, refactor later
      switch (key) {
        case 'intent':
          this.botData.storage.intent[subKey] = {
            key,
            subKey,
            value: ctx.expression()
          };
          break;
        case 'entity':
          this.botData.storage.entity[subKey] = {
            key,
            subKey,
            value: ctx.expression()
          };
          break;
        case 'ext':
          this.botData.storage.ext[subKey] = {
            key,
            subKey,
            value: ctx.expression()
          };
          break;
        default:
          throw new Error('Invalid storage type');
      }
    }
  }

  public getData(): IBotData {
    return this.botData;
  }

  protected defaultResult() {
    return '';
  }
}
