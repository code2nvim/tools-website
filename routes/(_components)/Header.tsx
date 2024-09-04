import { useSignal } from "@preact/signals";
import Menu from "../(_islands)/Menu.tsx";
import MenuButton from "../(_islands)/MenuButton.tsx";
import { Button } from "./Button.tsx";

export function Header() {
  const showMenu = useSignal(false);
  return (
    <>
      <header class="py-1 flex justify-between items-center bg-green-700">
        <a href="/" class="m-0">
          <Button>HOME</Button>
        </a>
        <h1>tools-website</h1>
        <MenuButton showMenu={showMenu} />
      </header>
      <Menu show={showMenu} />
    </>
  );
}
