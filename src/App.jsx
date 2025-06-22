import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import News from "./pages/News";

function App() {
	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/courses/:id" element={<CourseDetail />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
