import { Button } from "@base-ui/react/button";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { todoBlackOutBG } from "../../../assets/global.d";

export function Nav() {
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		const newLang = i18n.language === "ar" ? "en" : "ar";
		i18n.changeLanguage(newLang);
	};
	const [isScrolled, setIsScrolled] = React.useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// useEffect(() => {
	//     document.documentElement.lang = i18n.language;
	//     document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
	// }, [i18n.language]);

	return (
		<nav className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center h-20 ${i18n.language === 'en' ? 'font-mono' : ''}`}>
			<ul
				className={`flex w-full max-w-5xl justify-between items-center px-6 py-3 border transition-all duration-300  ${
					isScrolled
						? "bg-white/30 backdrop-blur-md  shadow-lg border-3 border-white p-2" // Scrolled: Transparent + Blur
						: "bg-[#F5F3E7] border-transparent hover:text-gray-500" // Initial: Solid Dark
				}`}
			>
			<li>
				<img src={todoBlackOutBG} alt="" className="h-10" />
			</li>
			<li className="text-black text-sm font-bold cursor-pointer border-2 border-transparent hover:border-black hover:bg-black hover:text-white hover:p-1 transition-colors px-1">
				{t("Main")}
			</li>
			<li className="text-black text-sm font-bold cursor-pointer border-2 border-transparent hover:border-black hover:bg-black hover:text-white hover:p-1 transition-colors px-1">
				{t("Service")}
			</li>
			<li className="text-black text-sm font-bold cursor-pointer border-2 border-transparent hover:border-black hover:bg-black hover:text-white hover:p-1 transition-colors px-1">
				{t("Feature")}
			</li>
			<li className="text-black text-sm font-bold cursor-pointer border-2 border-transparent hover:border-black hover:bg-black hover:text-white hover:p-1 transition-colors px-1">
				{t("Download")}
			</li>
			<li >
				{/** biome-ignore lint/a11y/useButtonType: <explanation> */}
				<Button
					onClick={changeLanguage}
					className="bg-black hover:bg-[#F5F3E7]  px-3 py-1 text-white border hover:border-black hover:text-black text-sm cursor-pointer transition-colors font-mono"
				>
					{i18n.language === "ar" ? "English" : "العربية"}
				</Button>
			</li>
			</ul>
		</nav>
	);
}
