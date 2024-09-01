import { Signal } from "@preact/signals";
import { Button } from "../(_components)/Button.tsx";

interface MenuButtonProps {
  showMenu: Signal<boolean>;
}

export default function MenuButton({ showMenu }: MenuButtonProps) {
  return (
    <Button onClick={() => showMenu.value = true}>
      MENU
    </Button>
  );
}
