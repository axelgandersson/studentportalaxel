import { useState } from "react";
import { RegistrationContext } from "./RegistrationContextContext";

export const RegistrationProvider = ({ children }) => {
	const [registrations, setRegistrations] = useState([]);

	const register = (registration) => {
		setRegistrations((prev) => [...prev, registration]);
	};

	return (
		<RegistrationContext.Provider value={{ registrations, register }}>
			{children}
		</RegistrationContext.Provider>
	);
};
