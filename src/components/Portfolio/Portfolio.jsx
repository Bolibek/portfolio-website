import PortfolioCard from "../PortfolioCard/PortfolioCard";
import portfolioObjects from "../../utils/portfolioObjects.js";
import "./Portfolio.css";

function Portfolio() {
	return (
		<section id="portfolio" className="flex flex-col items-center pt-5 pb-8 ">
			<h4 className="text-2xl">
				My Recent <span className="text-indigo-500">Portfolio</span> Pieces!
			</h4>
			<h5 className="my-3">Click on arrows, drag, or swipe!</h5>
			<div className=" flex flex-row">
				{portfolioObjects.map((portfolioObject, index) => {
					return <PortfolioCard {...portfolioObject} key={index} />;
				})}
			</div>
		</section>
	);
}

export default Portfolio;
