import ScrollspyNav from "react-scrollspy-nav";
import linkedin from "../../assets/img/linkedin.png";

export default function Navbar() {
	return (
		<ScrollspyNav
			scrollTargetIds={["nav", "home", "technologies", "portfolio", "contact"]}
			offset={200}
			activeNavClass="is-active"
			scrollDuration="500"
			headerBackground="true"
			
		>
			<div id="nav" className="shadow-[0px_4px_6px_#999] border-b-[.1rem] border-[#ddd] w-full z-10 fixed flex flex-row items-center justify-between px-40 h-[5.6rem] text-slate-600 bg-slate-50 bg-opacity-80">
				<div className="flex flex-row justify-between">
					<a href="#nav">
						<div className="flex flex-row">
							<img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/80/000000/external-keyboard-design-tools-xnimrodx-lineal-gradient-xnimrodx.png" />
						</div>
					</a>
					<div className="full-name text-[2rem] text-gray-600 ml-4 mt-2">
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
					<div className="flex flex-row">
						<div>
							<a href="https://www.facebook.com/fayzullaev.bolibek.9">
								<img src="https://img.icons8.com/glyph-neue/60/000000/facebook-new.png" />
							</a>
						</div>
						<div className="-mt-[.1rem]">
							<a href="https://github.com/Bolibek">
								<img src="https://img.icons8.com/ios-glyphs/63/000000/github.png" />
							</a>
						</div>
						<div className="mx-0.5">
							<a href="https://www.linkedin.com/in/bolibek/">
								<img src={linkedin} width="60px" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</ScrollspyNav>
	);
}
