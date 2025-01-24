import { signal } from "@preact/signals";
import { Fragment } from "preact";
import { Button } from "../(_components)/Button.tsx";

const showMenu = signal<boolean>(false);

export function MenuBar() {
  return showMenu.value
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
      <Button onClick={() => (showMenu.value = showMenu.value ? false : true)}>
        MENU
      </Button>
    </>
  );
}

function Menu() {
  return <>Menu</>;
}
