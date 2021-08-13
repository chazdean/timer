const args = process.argv.slice(2);

let timers = args.map(x => parseInt(x) * 100).sort((a, b) =>
  a - b).filter(item => (!isNaN(item)) && (Math.sign(item) === 1));

for (let x of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, x);
}
