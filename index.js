const meow = require('meow');
const cli = meow('This is a test. Try --multiple=string inputArg', {
  flags: {
    multiple: {
      type: 'string',
      isMultiple: true,
    }
  }
});

console.log('Input: ', cli.input);
console.log('Multiple: ', cli.flags.multiple)
