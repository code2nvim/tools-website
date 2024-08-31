import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="absolute h-full w-full grid grid-rows-[auto_1fr_auto] bg-black">
      <header class="h-6 bg-green-700">
        header
      </header>
      <main class="bg-green-300">
        <Component />
      </main>
      <footer class="h-6 bg-green-700">
        footer
      </footer>
    </div>
  );
}
