import { type Signal } from "@preact/signals";
import { Button } from "../(_components)/Button.tsx";

interface MenuProps {
  menu: Signal<boolean>;
}

export default function Menu({ menu }: MenuProps) {
  return (
    <>
      <Button onClick={() => menu.value = menu.value ? false : true}>
        ≡
      </Button>
    </>
  );
}
