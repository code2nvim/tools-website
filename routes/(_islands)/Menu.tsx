import { Signal } from "@preact/signals";
import { Fragment } from "preact/jsx-runtime";
import { Tool } from "../../utils/tool.ts";

interface MenuProps {
  show: Signal<boolean>;
}

export default function Menu({ show }: MenuProps) {
  return show.value
    ? (
      <nav
        class="absolute p-40 h-full w-full flex flex-col items-center opacity-90 bg-black"
        onClick={() => show.value = false}
      >
        <PageLink tool="notes" />
        <PageLink tool="files" />
      </nav>
    )
    : <Fragment />;
}

interface PageLinkProps {
  tool: Tool;
}

function PageLink({ tool }: PageLinkProps) {
  return (
    <a
      href={`/${tool}`}
      class="block w-[75%] my-6 border border-white text-white bg-opacity-0 bg-green-300"
    >
      {tool.toUpperCase()}
    </a>
  );
}
