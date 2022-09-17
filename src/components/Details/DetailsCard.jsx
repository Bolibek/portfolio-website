export default function DetailsCard({ techList = [], headImg }) {
	const techNames = techList.map((tech, id) => {
		return (
			<li key={id} className="border-b-[.02rem] p-1">
				{tech}
			</li>
		);
	});
	return (
		<div className="w-430px mx-2 border-[.02rem]  border-gray-300 rounded-sm shadow-[0px_1px_2px_#999] ">
			<div className="card-panel p-5 w-[300px]">
				<img
					className="mb-2"
					src={headImg}
					alt="Head Image"
					width={"240px"}
					height={"70px"}
				/>
				<ul className="border-[.02rem] border-b-0 border-gray-300">{techNames}</ul>
			</div>
		</div>
	);
}
