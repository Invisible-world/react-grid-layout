import { createContext, ReactNode, useContext, useState } from "react";

const GridLayoutContext = createContext<any>(null);

export const GridProvider = ({ children }: { children: ReactNode }) => {
	const [columns, setColumns] = useState<number>(4);
	const [selectedGrid, setSelectedGrid] = useState<any>(null);
	const [gridLayout, setGridLayout] = useState<any[]>([]);

	return (
		<GridLayoutContext.Provider
			value={{
				columns,
				setColumns,
				selectedGrid,
				setSelectedGrid,
				gridLayout,
				setGridLayout,
			}}
		>
			{children}
		</GridLayoutContext.Provider>
	);
};

const useGridLayout = () => useContext(GridLayoutContext);

export default useGridLayout;
