import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { Row, Col } from "react-bootstrap";

const Courses = () => (
	<Row>
		{courses.map((course) => (
			<Col key={course.id} sm={12} md={6} lg={4}>
				<CourseCard course={course} />
			</Col>
		))}
	</Row>
);

export default Courses;
