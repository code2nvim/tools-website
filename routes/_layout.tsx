import { type PageProps } from "$fresh/server.ts";
import { Footer } from "./(_components)/Footer.tsx";
import { Header } from "./(_components)/Header.tsx";
import { MenuBar } from "./(_islands)/Menu.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <div class="absolute h-full w-full flex bg-black">
        <MenuBar />
        <div class="h-full w-full grid grid-rows-[auto_1fr_auto]">
          <Header />
          <Component />
          <Footer />
        </div>
      </div>
    </>
  );
}
