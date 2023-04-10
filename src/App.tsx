import Canvas from "./component/Canvas";
import Layout from "./component/Layout";
import { GridProvider } from "./hooks/useGridLayout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

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

