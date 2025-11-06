// index.ts

type Phone = { make: string; model: number; color: string };
type Food = {name: string; price: number; color: string}

const data: ReadonlyArray<Phone> = [
  { make: "Nokia",   model: 216, color: "Black" },
  { make: "Mi Max",  model: 2,   color: "Gold"  },
  { make: "Samsung", model: 7,   color: "Blue"  },
] as const;

const example: ReadonlyArray<Food> = [
  { name: "Apple",    price: 52,  color: "Red"    },
  { name: "Banana",   price: 96,  color: "Yellow" },
  { name: "Carrot",   price: 41,  color: "Orange" },
]

const sortByKey = <T, K extends keyof T>(arr: ReadonlyArray<T>, key: K): T[] =>
  [...arr].sort((a, b) => {
    const va = a[key] as unknown as string | number;
    const vb = b[key] as unknown as string | number;
    return typeof va === "number" && typeof vb === "number"
      ? va - vb
      : String(va).localeCompare(String(vb));
  });

const isKey = (k: string): k is keyof Food => ["make", "model", "color", "name", "price"].includes(k);
const arg = process.argv[2];
const key: keyof Food = isKey(arg ?? "") ? (arg as keyof Food) : "price";

const sorted = sortByKey(example, key);

console.log(JSON.stringify(sorted, null, 2));
