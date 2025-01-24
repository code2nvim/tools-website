import { MenuIcon } from "../(_islands)/Menu.tsx";

export function Header() {
  return (
    <>
      <header class="flex items-center justify-between bg-green-700 py-1">
        <MenuIcon />
        {
          /*
        <a href="/">
          <Button>HOME</Button>
        </a>
           */
        }
      </header>
    </>
  );
}
