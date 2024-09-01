import { Signal } from "@preact/signals";
import { Fragment } from "preact/jsx-runtime";

interface NavMenuProps {
  show: Signal<boolean>;
}

export default function Menu({ show }: NavMenuProps) {
  return show.value
    ? (
      <nav
        class="absolute h-full w-full bg-black"
        onClick={() => show.value = false}
      >
        <a>TODO</a>
      </nav>
    )
    : <Fragment />;
}
