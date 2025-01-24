import { MenuIcon } from "../(_islands)/Menu.tsx";
import { Icon } from "./Icon.tsx";

export function Header() {
  return (
    <>
      <header class="flex items-center justify-between bg-purple-900 py-1">
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
