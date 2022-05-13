export function Increment() {
  return { type: "increment" };
}
export function Decrement() {
  return { type: "decrement" };
}
export function Reset() {
  return { type: "reset" };
}
export function ChangeStep(step) {
  return { type: "changeStep", payload: step };
}
