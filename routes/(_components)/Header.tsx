import { type ComponentChildren } from "preact";
import { Button } from "./Button.tsx";

interface HeaderProps {
  children: ComponentChildren;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <header class="py-1 flex justify-between items-center bg-green-700">
        {children}
        <a href="/" class="m-0">
          <Button>HOME</Button>
        </a>
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </header>
    </>
  );
}
