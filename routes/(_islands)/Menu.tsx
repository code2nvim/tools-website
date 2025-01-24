import { signal } from "@preact/signals";
import { Fragment } from "preact";
import { Button } from "../(_components)/Button.tsx";

export const menu = signal<boolean>(false);

export function MenuBar() {
  return menu.value
    ? (
      <nav class="text-white">
        <Menu />
      </nav>
    )
    : <Fragment />;
}

export function MenuButton() {
  return (
    <>
      <Button onClick={() => (menu.value = menu.value ? false : true)}>
        MENU
      </Button>
    </>
  );
}

function Menu() {
  return <>Menu</>;
}
