import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RegistrationProvider } from "./context/RegistrationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RegistrationProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RegistrationProvider>
	</React.StrictMode>
);
