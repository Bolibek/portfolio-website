import React, { Component } from "react";
import "./AboutMe.css";
import myPhoto from "../../assets/img/photo_2022-09-12_01-36-12.jpg";

function AboutMe() {
	return (
		<section id="about-me" className=" bg-indigo-100 py-5 mt-[-5px]">
			<div className="about-me shadow-[0px_3px_5px_#999] flex flex-row justify-between bg-white m-auto w-[50rem] p-5 text-[.85em]">
				<div className="mr-5">
					<img
						src={`${myPhoto}`}
						alt="My Photo"
						width={"350px"}
						height={"350px"}
						className="rounded-full"
					/>
				</div>
				<div className=" w-[90%] leading-tight">
					<h4 className="text-2xl pb-1">
						About <strong className="">Me</strong>
					</h4>
					<p className="py-1">
						Hi! I&apos;m Bolibek Fayzullaev. I am a full stack developer
						currently living in Chuncheon, South Korea.
					</p>
					<p className="py-1">
						I enjoy coding for both the front end and the back end. In
						particular, I enjoy the sense of pride and accomplishment when
						combining everything into a complete project.
					</p>
					<p className="py-1">
						I am excited to finally pursue my passion for computers,
						web-development, and coding.
					</p>
					<p className="py-1">
						Outside of coding, I am a pretty plain and normal individual. I like
						playing and watching team sports, playing games, chatting, and just
						living a simple life.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
