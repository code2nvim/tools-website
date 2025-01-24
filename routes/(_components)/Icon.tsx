import { JSX } from "preact";

export function Icon(props: JSX.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      draggable={false}
      width="20"
      height="20"
      class="m-1.5 invert filter"
    />
  );
}
