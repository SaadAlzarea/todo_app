
import  {
	StarfieldBackground,
} from "../../ui/starfield";
import { todoWithOutBG } from "../../../assets/global.d";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const { t, i18n } = useTranslation()
	return (
		<div className={` min-h-screen bg-black ${i18n.language === 'en' ? 'font-mono' : ''}`}>
			<StarfieldBackground
				children={
					<div className={`min-h-screen flex items-center justify-center ${i18n.language === 'en' ? 'font-mono' : ''}`}>
						<div className="flex gap-3 items-center border border-[#F5F3E7] p-5">
							<div>
								<img src={todoWithOutBG} alt="" className="h-60" />
							</div>
							<div>
								<h1 className="text-9xl font-bold text-[#F5F3E7]">
									{t("hero.title")}
								</h1>
								<p className="text-lg text-[#F5F3E7] mt-4 w-110 font-bold">
									{t("hero.description")}
								</p>
							</div>
						</div>
					</div>
				}
				starColor="#F5F3E7"
			/>
		</div>
	);
}
