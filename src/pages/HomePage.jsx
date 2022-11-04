import Slider from "../components/Slider/Slider";
import Details from "../components/Details/Details";
import Portfolio from "../components/Portfolio/Portfolio";
import AdditionalDetails from "../components/AdditionalDetails/AdditionalDetails";
import Follow from "../components/Follow/Follow";
import Contact from "../components/Contact/Contact";
import AboutMe from "../components/AboutMe";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function HomePage() {
	return (
		<div id="home" className="">
			<NavBar />
			<div className="h-[5.6rem] bg-gray-100"></div>
			<Slider />
			<AboutMe />
			<Details />
			<AdditionalDetails />
			<Portfolio />
			<Follow />
			<Contact />
			<Footer />
		</div>
	);
}

export default HomePage;
