import About from "../components/layout/landing/about.component";
import ContactUs from "../components/layout/landing/contactUs.component";
import Feature from "../components/layout/landing/feature.component";
import Hero from "../components/layout/landing/hero.component";
import JoinUs from "../components/layout/landing/joinUs.component";

export default function LandingPage() {
	return (
		<div>
			<Hero />
			<About />
			<Feature />
			<JoinUs />
			<ContactUs />
		</div>
	);
}
