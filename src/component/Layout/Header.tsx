import useGridLayout from "../../hooks/useGridLayout";

export default function Header() {
	const { gridLayout, setColumns, setGridLayout, setSelectedGrid } =
		useGridLayout();
	return (
		<header className="bg-teal-500 px-4 py-2 flex justify-between align-center">
			<span className="text-white text-lg mt-3">React Drag and Drop</span>{" "}
			<div className="flex justify-end mt-2">
				<select
					onChange={(val) =>
						setColumns((prevState: any) => val?.target?.value ?? prevState)
					}
					className={`${
						gridLayout.length === 0 && "mr-10"
					} bg-white-500  font-bold py-2 px-4 rounded ml-5`}
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
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
					>
						Clear Canvas
					</button>
				)}
			</div>
		</header>
	);
}
