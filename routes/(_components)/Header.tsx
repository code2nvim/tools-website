import { Button } from "./Button.tsx";
import { MenuButton } from "../(_islands)/Menu.tsx";

export function Header() {
  return (
    <>
      <header class="py-1 flex justify-between items-center bg-green-700">
        <MenuButton />
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
