import { useState, useContext } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Button,
	MenuItem,
} from "@mui/material";
import { RegistrationContext } from "../context/RegistrationContext";
import { courses } from "../data/courses";

const RegistrationDialog = ({ open, onClose }) => {
	const { register } = useContext(RegistrationContext);
	const [form, setForm] = useState({ name: "", email: "", courseId: "" });

	const handleSubmit = () => {
		if (!form.name || !form.email || !form.courseId) return;
		register(form);
		setForm({ name: "", email: "", courseId: "" });
		onClose();
	};

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Registrera dig till en kurs</DialogTitle>
			<DialogContent>
				<TextField
					fullWidth
					label="Namn"
					id="name"
					margin="normal"
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
				<TextField
					fullWidth
					label="E-post"
					id="email"
					type="email"
					margin="normal"
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>
				<TextField
					fullWidth
					select
					label="Välj kurs"
					id="course"
					margin="normal"
					value={form.courseId}
					onChange={(e) => setForm({ ...form, courseId: e.target.value })}
				>
					{courses.map((c) => (
						<MenuItem key={c.id} value={c.id}>
							{c.name}
						</MenuItem>
					))}
				</TextField>
				<Button
					variant="contained"
					onClick={handleSubmit}
					sx={{ mt: 2 }}
					disabled={!form.name || !form.email || !form.courseId}
				>
					Registrera
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default RegistrationDialog;
