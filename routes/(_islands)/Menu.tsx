import { Fragment } from "preact";
import { signal } from "@preact/signals";
import { Icon } from "../(_components)/Icon.tsx";

const show = signal<boolean>(false);

export function MenuBar() {
  return show.value
    ? (
      <nav class="text-white">
        <Menu />
      </nav>
    )
    : <Fragment />;
}

export function MenuIcon() {
  return (
    <Icon
      onClick={() => (show.value = show.value ? false : true)}
      src="/menu.svg"
      alt="menu icon"
    />
  );
}

function Menu() {
  return <>Menu</>;
}
