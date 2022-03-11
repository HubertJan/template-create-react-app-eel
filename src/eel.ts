export const eel = window["eel" as any] as any;

eel.expose(hello);
function hello(x: string) {
  console.log(x);
}
