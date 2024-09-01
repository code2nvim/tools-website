import { useSignal } from "@preact/signals";
import Menu from "../(_islands)/Menu.tsx";
import MenuButton from "../(_islands)/MenuButton.tsx";

export function Header() {
  const showMenu = useSignal(false);
  return (
    <>
      <header class="py-1 flex justify-between items-center bg-green-700">
        <button class="mx-2">HOME</button>
        <MenuButton showMenu={showMenu} />
      </header>
      <Menu show={showMenu} />
    </>
  );
}
