import { type Signal } from "@preact/signals";
import { Button } from "../(_components)/Button.tsx";

interface MenuProps {
  menu: Signal<boolean>;
}

export default function MenuButton({ menu }: MenuProps) {
  return (
    <>
      <Button
        onClick={() => menu.value = menu.value ? false : true}
      >
        MENU
      </Button>
    </>
  );
}
