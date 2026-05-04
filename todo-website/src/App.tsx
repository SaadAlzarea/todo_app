import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect } from "react";
import Router from "./router/router.route";

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
		document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
	}, [i18n.language]);

	return (
		<div>
			<Router />
		</div>
	);
}

export default App;
