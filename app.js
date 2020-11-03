
const chalk = require("chalk")
const { demandOption } = require("yargs")
const yargs = require("yargs")
const notes = require("./notes")

// Customize yargs version

yargs.version("1.1.0")

// Create add command

yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command

yargs.command({
    command: 'remove', 
    describe: 'Removing a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
         notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list', 
    describe: 'Notes list',
    handler(argv) {
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command: 'read', 
    describe: 'Reads a note',
    builder: {
        title: {
            describe: "Reads a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
    notes.readNote(argv.title)
    }
})


// add, remove, read, list for notes

yargs.parse()

// console.log(yargs.argv)



