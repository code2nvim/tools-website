import { useSignal } from "@preact/signals";
import { type PageProps } from "$fresh/server.ts";
import { Footer } from "./(_components)/Footer.tsx";
import { Header } from "./(_components)/Header.tsx";
import Menu from "./(_islands)/Menu.tsx";
import MenuBar from "./(_islands)/MenuBar.tsx";

export default function Layout({ Component }: PageProps) {
  const menu = useSignal(false);

  return (
    <>
      <div class="absolute h-full w-full flex bg-black">
        <MenuBar menu={menu} />
        <div class="h-full w-full grid grid-rows-[auto_1fr_auto]">
          <Header>
            <Menu menu={menu} />
          </Header>
          <Component />
          <Footer />
        </div>
      </div>
    </>
  );
}
