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
        <a href="/">
          <Button>HOME</Button>
        </a>
        <a
          aria-label="Browse the code on GitHub"
          href="https://github.com/code2nvim/tools-website.git"
        >
          <Button>GitHub</Button>
        </a>
      </header>
    </>
  );
}
