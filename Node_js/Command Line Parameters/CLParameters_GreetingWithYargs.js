const yargs = require('yargs');

// Create a command to handle greetings
yargs.command({
    command: 'greet',
    // Define required parameters
    builder: {
        name: {
            demandOption: true, // This parameter is always required
            type: 'String'
        }
    },
    // Create a handler for this command
    handler(argv) {
        console.log("Hello " + argv.name)
    }
 })

 // Set the above changes
 yargs.parse();
process.exit();