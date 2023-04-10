import { Responsive, WidthProvider } from "react-grid-layout";
import useGridLayout from "../../hooks/useGridLayout";
import { v4 as uuid } from "uuid";

export default function Canvas() {
	const ResponsiveGridLayout = WidthProvider(Responsive);
	const { columns, gridLayout, setSelectedGrid, setGridLayout } =
		useGridLayout();
	const onDrop = (layout: any, layoutItem: any, event: any) => {
		const { text } = JSON.parse(event?.dataTransfer?.getData("text/plain"));
		setGridLayout((prevState: any[]) => [
			...prevState,
			{ id: uuid(), type: text },
		]);
	};
	return (
		<ResponsiveGridLayout
			rowHeight={40}
			onDrop={onDrop}
			breakpoints={{ lg: 1080 }}
			cols={{ lg: columns }}
			isDroppable
			style={{ minHeight: "100%" }}
		>
			{gridLayout?.map((item: any, ind: number) => {
				return (
					<div
						onClick={() => {
							setSelectedGrid(item);
						}}
						key={item?.id || ind}
						className="cursor-pointer"
					>
						<GridElement
							type={item?.type}
							style={item?.properties?.style ?? {}}
							props={item?.properties?.props ?? {}}
						/>
					</div>
				);
			})}
		</ResponsiveGridLayout>
	);
}

const GridElement = ({
	type,
	style,
	props,
}: {
	type: "input" | "button";
	style: any;
	props: any;
}) => {
	return <ElementList type={type} style={style} props={props} />;
};

const ElementList = ({
	type,
	style,
	props,
}: {
	type: string;
	style: any;
	props: any;
}) => {
	switch (type) {
		case "button":
			return (
				<button style={style} {...props} className="w-full h-full">
					{props?.value || "Button"}
				</button>
			);
		case "input":
			return (
				<input
					style={style}
					{...props}
					className="w-full h-full"
					placeholder={props?.placeholder || "Input"}
				></input>
			);
		default:
			return <></>;
	}
};
