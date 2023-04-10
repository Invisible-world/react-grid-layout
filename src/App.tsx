import Canvas from "./component/Canvas";
import Layout from "./component/Layout";
import { GridProvider } from "./hooks/useGridLayout";

function App() {
	return (
		<>
			<GridProvider>
				<Layout>
					<Canvas />
				</Layout>
			</GridProvider>
		</>
	);
}

export default App;

