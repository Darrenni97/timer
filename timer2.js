const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  let isNumber = Number(key)
  if (Number.isInteger(isNumber) && isNumber > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, isNumber * 1000);
  }

  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n')
    process.exit();
  }
});