import ScrollspyNav from "react-scrollspy-nav";

export default function Navbar() {
	return (
		<ScrollspyNav
			scrollTargetIds={["nav", "home", "technologies", "portfolio", "contact"]}
			offset={200}
			activeNavClass="is-active"
			scrollDuration="500"
			headerBackground="true"
		>
			<div
				id="nav"
				className=" z-50 shadow-[0px_4px_6px_#999] border-b-[.1rem] border-[#ddd] w-full fixed flex flex-row items-center justify-between px-40 h-[5.6rem] text-slate-600 bg-slate-50 bg-opacity-80"
			>
				<div className="flex flex-row justify-between">
					<a href="#nav">
						<div className="flex flex-row">
							<img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/80/000000/external-keyboard-design-tools-xnimrodx-lineal-gradient-xnimrodx.png" />
						</div>
					</a>
					<div className="full-name text-[3.1rem] text-gray-600 ml-4 mt-5">
						<h1>Bekkì dev</h1>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row text-sm mt-1 font-medium text-[#605e5e] ">
						<a href="#home">
							<div className="mx-2 pt-2 hover:text-[#34ed8a]">
								<h2>HOME</h2>
							</div>
						</a>
						<a href="#technologies">
							<div className="mx-2 pt-2 hover:text-[#34ed8a]">
								<h2>TECHNOLOGIES</h2>
							</div>
						</a>
						<a href="#portfolio">
							<div className="mx-2 pt-2 hover:text-[#34ed8a]">
								<h2>PORTFOLIO</h2>
							</div>
						</a>
						<a href="#contact">
							<div className="mx-2 pt-2 hover:text-[#34ed8a]">
								<h2>CONTACT</h2>
							</div>
						</a>
					</div>
					
				</div>
			</div>
		</ScrollspyNav>
	);
}
