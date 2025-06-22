import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => (
	<Card className="mb-3">
		<Card.Body>
			<Card.Title>{course.name}</Card.Title>
			<Card.Text>{course.shortDescription}</Card.Text>
			<Link to={`/courses/${course.id}`}>
				<Button variant="primary">Läs mer</Button>
			</Link>
		</Card.Body>
	</Card>
);

export default CourseCard;
