export function cryptoRandom() {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return array[0] / 0xffffffff
}
