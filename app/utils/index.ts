export function generateAlphabet() {
  let alphabet = '';
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    alphabet += String.fromCharCode(i);
  }
  return alphabet;
}
