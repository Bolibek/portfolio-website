import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleRight,
	faArrowRight,
	faArrowRightArrowLeft,
	faArrowRightToBracket,
	faArrowRightToCity,
	faArrowRightToFile,
	faArrowsAltV,
	faArrowsLeftRight,
	faArrowsLeftRightToLine,
	faArrowsSplitUpAndLeft,
	faArrowsToCircle,
	faArrowsToEye,
	faArrowsV,
	faCompressArrowsAlt,
	faLessThan,
} from "@fortawesome/free-solid-svg-icons";
const createMarkup = require("../../utils/library.js").createMarkup;

function PortfolioCard(props) {
	const { urlDemo, urlCode, title, details, headImg } = props;
	return (
		<div className="flex flex-col w-64 mx-5">
			<div className="card-image">
				<img src={headImg} alt="" />
			</div>
			<div className="flex flex-col items-center absolute z-50 opacity-0 hover:opacity-100 bg-[#ffffffc1] w-64 h-48">
				<div className="flex flex-col items-center ">
					<a href={urlDemo} target="_blank">
						<h5 className="">
							<strong
								className="text-2xl"
								dangerouslySetInnerHTML={createMarkup(title)}
							></strong>
						</h5>
					</a>
					<div className="text-xs grid grid-cols-3 grid-flow-row my-3 px-3">
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
				<div className="">
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
