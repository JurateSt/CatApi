import { Routes, Route } from 'react-router-dom';
import { Breeds } from './pages/Breeds';
import { Breed } from './pages/Breed';

const App = () => {
	return (
		<Routes>
			<Route path="/breeds" element={<Breeds />} />
			<Route path="/breeds/:id" element={<Breed />} />
		</Routes>
	);
};

export default App;
