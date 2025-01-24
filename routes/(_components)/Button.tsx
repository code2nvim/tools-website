import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="m-1 rounded border-2 border-gray-300 bg-white px-1"
    />
  );
}
