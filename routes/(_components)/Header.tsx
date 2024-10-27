import { type Signal } from "@preact/signals";
import Menu from "../(_islands)/Menu.tsx";
import { Button } from "./Button.tsx";

interface HeaderProps {
  menu: Signal<boolean>;
}

export function Header({ menu }: HeaderProps) {
  return (
    <>
      <header class="py-1 flex justify-between items-center bg-green-700">
        <Menu menu={menu}/>
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
