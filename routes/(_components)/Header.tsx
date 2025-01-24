import { MenuIcon } from "../(_islands)/Menu.tsx";
import { Icon } from "./Icon.tsx";

export function Header() {
  return (
    <>
      <header class="flex items-center justify-between bg-green-700 py-1">
        <MenuIcon />
        <HomeIcon />
      </header>
    </>
  );
}

function HomeIcon() {
  return (
    <a draggable={false} href="/">
      <Icon src="/home.svg" alt="home icon" />
    </a>
  );
}
