export function streamingDataR() {
  const r = Math.floor(Math.random() * 90000) + 10000;
  const time = (Date.now() / 1000) * 2;

  const token = (time * r).toFixed();

  return {
    r,
    token,
  };
}
