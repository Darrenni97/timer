const args = process.argv.slice(2);

for (let arg of args) {
  let numArg = Number(arg)
  if (Number.isInteger(numArg) && numArg >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numArg * 1000);
  }
};
