import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { useState } from "react";
import RegistrationDialog from "../components/RegistrationDialog";
import { Button } from "react-bootstrap";

const CourseDetail = () => {
	const { id } = useParams();
	const course = courses.find((c) => c.id === id);
	const [open, setOpen] = useState(false);

	if (!course) return <p>Kursen hittades inte.</p>;

	return (
		<div>
			<h2>{course.name}</h2>
			<p>{course.description}</p>
			<Button variant="success" onClick={() => setOpen(true)}>
				Registrera dig
			</Button>
			<RegistrationDialog open={open} onClose={() => setOpen(false)} />
		</div>
	);
};

export default CourseDetail;
