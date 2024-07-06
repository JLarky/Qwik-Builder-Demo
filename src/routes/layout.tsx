import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>Hello Qwik</h1>
      <Slot />
    </>
  );
});
