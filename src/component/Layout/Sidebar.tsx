import { useId } from "react";

interface ElementListType {
	type: string;
	label: string;
}
const ElementList: ElementListType[] = [
	{ type: "input", label: "Input Field" },
	{ type: "button", label: "Button" },
];

export default function Sidebar() {
	return (
		<aside className="bg-gray-200 p-4 w-64">
			<p className="text-center">Dragabble Element</p>
			{ElementList?.map((item, ind) => (
				<DraggableElement key={ind} type={item?.type} label={item?.label} />
			))}
		</aside>
	);
}

function DraggableElement({ type, label }: ElementListType) {
	const id = useId();
	const onDragStart = (event: any, id: string, text: string) => {
		event.dataTransfer.setData("text/plain", JSON.stringify({ id, text }));
	};

	return (
		<div
			className="mt-4 bg-white p-2 rounded-lg"
			draggable
			onDragStart={(e) => onDragStart(e, id, type)}
		>
			{label}
		</div>
	);
}
