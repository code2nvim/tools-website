import { signal } from "@preact/signals";
import { Fragment } from "preact";

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
    <img
      onClick={() => (show.value = show.value ? false : true)}
      draggable={false}
      src="/menu.svg"
      width="24"
      height="24"
      alt="menu icon"
      class="m-2 invert filter"
    />
  );
}

function Menu() {
  return <>Menu</>;
}
