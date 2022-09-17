import quizIgm from "../../assets/img/p-quizit2.png";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import portfolioObjects from "../../utils/portfolioObjects.js";
import "./Portfolio.css";

function Portfolio() {
	const imgArray = [];
	imgArray.length = 9
	imgArray.fill(quizIgm, 0, 9);
	console.log(imgArray);
	return (
		<section id="portfolio" className="flex flex-col items-center pt-5 pb-8 ">
				<h4 className="text-2xl">
					My Recent <span className="text-indigo-500">Portfolio</span> Pieces!
				</h4>
				<h5 className="my-3">Click on arrows, drag, or swipe!</h5>
				<div className=" flex flex-row">
					{portfolioObjects.map((portfolioObject, index) => {
						return (
							<PortfolioCard
								headImg={imgArray[index]}
								title={portfolioObject.title}
								urlDemo={portfolioObject.urlDemo}
								urlCode={portfolioObject.urlCode}
								details={portfolioObject.details}
								key={index}
							/>
						);
					})}
				</div>
		</section>
	);
}

export default Portfolio;
