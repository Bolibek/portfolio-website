import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
const createMarkup = require("../../utils/library.js").createMarkup;

function PortfolioCard(props) {
	const { urlDemo, urlCode, title, details, headImage } = props;
	return (
		<div className="flex flex-col w-64 mx-5 h-48">
			<div className="card-image h-20">
				<img src={headImage} alt={title}  />
			</div>
			<div className="flex flex-col items-center absolute  z-50 opacity-0 hover:opacity-100 bg-[#ffffffc1] w-64 h-40">
				<div className="flex flex-col items-center ">
					<a href={urlDemo} target="_blank">
						<h5 className="">
							<strong
								className="text-2xl"
								dangerouslySetInnerHTML={createMarkup(title)}
							></strong>
						</h5>
					</a>
					<div className="text-xs grid grid-cols-3 grid-flow-row my-1 px-3">
						{details.map((detail, index) => {
							return (
								<div
									key={index}
									className="m-1 bg-indigo-400 text-white p-1 rounded-xl text-center"
								>
									{detail}
								</div>
							);
						})}
						<div className="" />
					</div>
				</div>
				<div className="text-xs">
					<a
						target="_blank"
						href={urlDemo}
						className="bg-indigo-700 rounded-sm mx-1 p-1 text-white"
					>
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						<strong className="ml-1 mr-4">DEMO</strong>
					</a>
					<a
						target="_blank"
						href={urlCode}
						className="bg-indigo-700 rounded-sm mx-1 p-1 text-white"
					>
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						<strong className="ml-1 mr-4">CODE</strong>
					</a>
				</div>
			</div>
		</div>
	);
}

export default PortfolioCard;
