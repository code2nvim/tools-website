import { JSX } from "preact";

export function Icon(props: JSX.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      draggable={false}
      width="24"
      height="24"
      class="mx-2 my-1 invert filter"
    />
  );
}
