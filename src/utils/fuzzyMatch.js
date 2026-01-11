export default function fuzzyMatch(input, target) {
  input = input.toLowerCase();
  target = target.toLowerCase();

  if (target.includes(input)) return true;

  let i = 0;
  let j = 0;
  let mismatch = 0;

  while (i < input.length && j < target.length) {
    if (input[i] === target[j]) {
      i++;
      j++;
    } else {
      mismatch++;
      j++;
      if (mismatch > 2) return false;
    }
  }
  return true;
}