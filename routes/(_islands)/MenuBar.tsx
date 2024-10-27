import { Signal } from "@preact/signals";

interface MenuBarProps {
  menu: Signal<boolean>;
}

export function MenuBar({ menu }: MenuBarProps) {
  return menu.value
    ? (
      <nav class="text-white">
        MenuBar
      </nav>
    )
    : (
      <>
      </>
    );
}
