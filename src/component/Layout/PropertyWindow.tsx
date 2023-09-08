import useGridLayout from "../../hooks/useGridLayout";

const propertiesList = [
	{
		label: "Background Color",
		key: "backgroundColor",
		for: ["input", "button"],
		type: "style",
	},
	{
		label: "Button Color",
		key: "color",
		for: ["button"],
		type: "style",
	},
	{
		label: "Button Value",
		key: "value",
		for: ["button"],
		type: "props",
	},
	{
		label: "Placeholder",
		key: "placeholder",
		for: ["input"],
		type: "props",
	},
];

export default function PropertyWindow() {
	const { selectedGrid, setGridLayout, setSelectedGrid } = useGridLayout();
	return (
		<aside className="bg-gray-200 p-4 w-72">
			<span className="text-lg whitespace-nowrap font-semi-bold">Draggable <small className="subpixel-antialiased">Element</small> Properties</span>

			<div className="flex flex-col gap-2 ">

				{propertiesList?.map((item, ind) => {
					return (
						item?.for?.includes(selectedGrid?.type) && (
							<input
								key={ind}
								onChange={(e) => {
									setGridLayout((list: any[]) => {
										const newGrid = {
											...selectedGrid,
											properties: {
												...selectedGrid?.properties,
												[item?.type]: {
													...selectedGrid?.properties?.[item?.type],
													[e?.target?.name]: e?.target?.value,
												},
											},
										};

										setSelectedGrid(newGrid);

										return list?.map((gridItem: any) =>
											gridItem?.id !== selectedGrid?.id ? gridItem : newGrid
										);
									});
								}}
								value={selectedGrid?.properties?.[item?.type]?.[item?.key] || ""}
								name={item?.key}
								className="mt-4 bg-white p-2 rounded-md"
								placeholder={item?.label}
							/>
						)
					);
				})}
			</div>

		</aside>
	);
}
