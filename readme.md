# Arubick

> Simple bot engine with expressive syntax.

Arubick is a simple bot engine that runs on Javascript by feeding it a \*.rbot
file that contains expressive syntax of your bot.

```rbot
RandomBot:0.0.1

def ext/random = extern("./js/random.js")

def intent/query = [
    "random"
]
def intent/greet = [
    "hi",
    "hello"
]

def entity/number = regex("[0-9]+")
def entity/between = [
    "between ${start@entity/number} - ${end@entity/number}",
    "between ${start@entity/number} and ${end@entity/number}",
    "between ${start@entity/number} to ${end@entity/number}"
]

main {
    say("Hello, I am random bot.")
    def message = await reply()
    if message is intent/greet {
        say("Hi too!")
    }
    if message is intent/query {
        def random = 0
        if message is intent/between {
            def extract = intent/between(message)
            ext/random(extract.start, extract.end)
        }else{
            ext/random()
        }

        say("Generated random number ${random}")
    }
}
```

**ARUBICK IS EXPERIMENTAL PROJECT AND SUBJECT TO FREQUENT CHANGES THAT COULD
BREAKS PREVIOUS VERSION.**

**Arubick is a way for me to learn Antlr, there might be some things that does
not follow Antlr best practice, I am used to write parser manually before.**

## Agnostic Design

Arubick is designed to be agnostic, it is not primarily designed to run limited
to the engine. You should be able to extend (not yet implemented) Arubick to use
external natural language processing engine.

```rbot
def extract = ext/intentQuery(message)
if extract {
    say("...")
}
```

Where `ext/intentQuery` above is defined as external natural language processor.

## Contribution

This is more like a learning project and research, so feel free to share your
knowledge with me and any form of contribution is accepted.

## Extra

Arubick is named after Rubick, a DoTA 2 hero that can learn the opponent spells.
