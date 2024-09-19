import { Button } from "./Button.tsx";

export function Header() {
	return (
		<>
			<header class="py-1 flex justify-between items-center bg-green-700">
				<a href="/" class="m-0">
					<Button>HOME</Button>
				</a>
			</header>
		</>
	);
}
