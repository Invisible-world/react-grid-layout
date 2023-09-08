import { ReactPortal } from "react";
import Sidebar from "./Sidebar";
import PropertyWindow from "./PropertyWindow";
import Header from "./Header";
import useGridLayout from "../../hooks/useGridLayout";

export default function Layout({ children }: Pick<ReactPortal, "children">) {
	const { gridLayout } = useGridLayout();
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-1">
				<Sidebar />
				<main className="flex-1 p-4">{children}</main>
				{gridLayout.length > 0 && <PropertyWindow />}
			</div>
			<footer className="bg-primaryDark text-dark p-4 text-center">
				<span className="text-lg font-bold text-gray-500">Copyright 2023</span>
			</footer>
		</div>
	);
}
