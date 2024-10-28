import { Signal } from "@preact/signals";
import { Fragment } from "preact";

interface MenuBarProps {
  menu: Signal<boolean>;
}

export default function MenuBar({ menu }: MenuBarProps) {
  return menu.value
    ? (
      <nav class="text-white">
        MenuBar
      </nav>
    )
    : <Fragment />;
}
