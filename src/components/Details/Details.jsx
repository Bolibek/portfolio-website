import mongoImg from "../../assets/img/mongodb.jpg";
import expressImg from "../../assets/img/express.jpg";
import reactImg from "../../assets/img/react.png";
import nodeImg from "../../assets/img/nodejs.png";
import DetailsCard from "./DetailsCard";
import data from "../../utils/technologies.json";
const { technologies } = data;

function Details() {
	const imgArray = [mongoImg, expressImg, reactImg, nodeImg];
	return (
		<section id="technologies" className="bg-white py-6">
			<div className="w-[55rem] flex flex-col items-center m-auto">
				<h4 className="mb-2 text-2xl">
					<strong className=" text-indigo-500 font-normal">MERN</strong> Developer
				</h4>
				<div className="flex flex-row">
					{technologies.length &&
						technologies.map((tech, id) => (
							<DetailsCard key={id} {...tech} headImg={imgArray[id]} />
						))}
				</div>
			</div>
		</section>
	);
}
export default Details;
