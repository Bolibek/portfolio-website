import React, { Component } from "react";
import linkedin from "../../assets/img/linkedin.png";

import "./Follow.css";

class Follow extends Component {
	render() {
		return (
			<section className="py-5 bg-black  text-white center">
				<div className="">
					<div className="">
						<div className="flex flex-col items-center mx-auto w-full justify-around h-28">
							<h4 className="text-2xl">Bolibek&apos;s Social Stuff</h4>
							<p className="text-xs">Links to my Github, Facebook, and LinkedIn.</p>
							<div className="flex flex-row">
								<div className="-mt-[.1rem]">
									<a href="https://github.com/Bolibek">
										<img src="https://img.icons8.com/ios-glyphs/63/ffffff/github.png" />
									</a>
								</div>
								<div>
									<a href="https://www.facebook.com/fayzullaev.bolibek.9">
										<img src="https://img.icons8.com/glyph-neue/67/ffffff/facebook.png" />
									</a>
								</div>
								<div className="mx-0.5 mt-0.5">
									<a href="https://www.linkedin.com/in/bolibek/">
										<img src="https://img.icons8.com/ios-filled/60/ffffff/linkedin.png"/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Follow;
