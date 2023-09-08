import useGridLayout from "../../hooks/useGridLayout";

export default function Header() {
	const { gridLayout, setColumns, setGridLayout, setSelectedGrid } =
		useGridLayout();
	return (
		<header className="bg-primaryDark px-4 py-2 flex justify-between align-center place-content-center">
			<span className="text-gray-500 text-lg mt-3 font-bold">React Drag and Drop</span>{" "}
			<div className="flex justify-end mt-2">
				<select
					onChange={(val) =>
						setColumns((prevState: any) => val?.target?.value ?? prevState)
					}
					className={`${gridLayout.length === 0 && "mr-10"
						} bg-white-500  font-bold py-2 px-4 rounded hover:cursor-pointer appearance-none  outline-none outline-primary text-gray-500 `}
				>
					<option value="">Choose Columns</option>
					<option value={4}>4</option>
					<option value={6}>6</option>
					<option value={12}>12</option>
					<option value={20}>20</option>
				</select>
				{gridLayout.length > 0 && (
					<button
						onClick={() => {
							setGridLayout([]);
							setSelectedGrid(null);
						}}
						className=" bg-white hover:bg-slate-100 text-gray-500 font-bold py-2 px-4 rounded ml-5"
					>
						Clear Canvas
					</button>
				)}
			</div>
		</header>
	);
}
