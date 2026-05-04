import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "./i18n.ts";

function Root() {
	useEffect(() => {
		const update = () => {
			document.documentElement.lang = i18n.language;
			document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
		};

		update();
		i18n.on("languageChanged", update);

		return () => {
			i18n.off("languageChanged", update);
		};
	}, []);

	return <App />;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Root />
	</StrictMode>,
);
