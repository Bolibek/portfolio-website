import { useSelector, useDispatch } from "react-redux";
import {
	toggleTabKeyForLap,
	toggleTabKeyForOth,
	toggleTabKeyForMob,
} from "../../app/store";
import data from "../../utils/additionals.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLaptop,
	faServer,
	faTabletAndroid,
} from "@fortawesome/free-solid-svg-icons";
function AdditionalDetails() {
	const { tabKeyForLap, tabKeyForOth, tabKeyForMob } = useSelector(
		(state) => state
	);
	const dispatch = useDispatch();
	const { laptops, others, mobiles } = data;
	return (
		<section className=" bg-indigo-100 flex flex-col items-center pt-5 pb-8 ">
			<h4 className="text-2xl text-gray-800 mb-3">
				Additional <span className=" text-indigo-500">Technologies</span>
			</h4>

			<ul className="w-[35rem] bg-slate-50 text-[.6rem] shadow-[0px_3px_5px_#999] rounded-sm">
				<li>
					<div
						onClick={() => dispatch(toggleTabKeyForLap())}
						className="px-4 py-[.65rem] border-b-[.02rem] border-b-[#bcbcbc] cursor-pointer "
					>
						<FontAwesomeIcon className="mr-3" icon={faLaptop} /> Front-End
						Technologies
					</div>
					<div className={`${tabKeyForLap} px-4 py-[.65rem]`}>
						<table className="striped">
							<tbody>
								{laptops.map((laptop, i) => (
									<tr className=" bg-inherit odd:bg-[#efeeee] " key={i}>
										<td className="px-4 py-[.65rem] w-[33rem]">{laptop}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</li>
				<li>
					<div
						onClick={() => dispatch(toggleTabKeyForOth())}
						className="px-4 py-[.65rem] border-b-[.02rem] border-b-[#bcbcbc] cursor-pointer"
					>
						<FontAwesomeIcon className="mr-3" icon={faServer} /> Back-End
						Technologies
					</div>
					<div className={`${tabKeyForOth} px-4 py-[.65rem]`}>
						<table className="striped">
							<tbody>
								{others.map((other, i) => (
									<tr className=" bg-inherit odd:bg-[#efeeee]" key={i}>
										<td className="px-4 py-[.65rem] w-[33rem]">{other}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</li>
				<li>
					<div
						onClick={() => dispatch(toggleTabKeyForMob())}
						className="px-4 py-[.65rem]  cursor-pointer"
					>
						<FontAwesomeIcon className="mr-3" icon={faTabletAndroid} /> Other
						Technologies
					</div>
					<div className={`${tabKeyForMob} px-4 py-[.65rem]`}>
						<table className="striped">
							<tbody>
								{mobiles.map((mobile, i) => (
									<tr className=" bg-inherit odd:bg-[#efeeee] " key={i}>
										<td className="px-4 py-[.65rem] w-[33rem]">{mobile}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default AdditionalDetails;
