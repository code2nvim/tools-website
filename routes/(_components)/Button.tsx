import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="mx-1 px-2 border-2 border-white rounded bg-yellow-200"
    />
  );
}
