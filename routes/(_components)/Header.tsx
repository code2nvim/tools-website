import { Button } from "./Button.tsx";
import { MenuButton } from "../(_islands)/Menu.tsx";

export function Header() {
  return (
    <>
      <header class="flex items-center justify-between bg-green-700 py-1">
        <MenuButton />
        <a href="/">
          <Button>HOME</Button>
        </a>
      </header>
    </>
  );
}
