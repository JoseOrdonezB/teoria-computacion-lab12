type Matrix = ReadonlyArray<ReadonlyArray<number>>;

const transpose = (X: Matrix): number[][] =>
  X.length === 0 ? [] : X[0].map((_, j) => X.map(row => row[j]));

const assertRectangular = (X: Matrix) => {
  if (X.length === 0) return;
  const n = X[0].length;
  if (!X.every(r => r.length === n)) {
    throw new Error("La matriz no es rectangular.");
  }
};

const X: Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
] as const;

assertRectangular(X);

const XT = transpose(X);
console.log(JSON.stringify(XT, null, 2));
