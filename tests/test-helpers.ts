export function loop(n: number, cb: Function): void {
  for (let i = 0; i < n; ++i) {
    cb();
  }
}

export function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

export function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
