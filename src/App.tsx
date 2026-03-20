import DifferentialSection from "./coreComponents/differentialSection";
import Footer from "./coreComponents/footer";
import HeroSection from "./coreComponents/heroSection";
import InvestmentSection from "./coreComponents/investmentSection";
import ServiceSection from "./coreComponents/servicesSection";
import SocialProofSection from "./coreComponents/socialProofSection";

function App() {
	return (
		<main>
			<HeroSection />
			<ServiceSection />
			<DifferentialSection />
			<SocialProofSection />
			<InvestmentSection />
			<Footer />
		</main>
	);
}

export default App;
