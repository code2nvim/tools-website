import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="m-1.5 p-1 border-2 border-gray-300 rounded bg-white"
    />
  );
}
