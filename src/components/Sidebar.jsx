import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import {
	BsFillCloudsFill,
	BsFacebook,
	BsTwitter,
	BsInstagram,
} from "react-icons/bs";
import { GiFootprint } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import * as cst from "../Constants";

const sideButtons = [
	{
		name: "Home Page",
		icon: <MdSpaceDashboard />,
		click: "home",
	},
	{
		name: "Carbon Footprint",
		icon: <GiFootprint />,
		click: "calc",
	},
	{
		name: (
			<>
				CO<sub>2</sub> Emmision
			</>
		),
		icon: <BsFillCloudsFill />,
		click: "formulae",
	},
	{
		name: "Contact Us",
		icon: <HiOutlineChatBubbleLeftRight />,
		click: "contactus",
	},
];

function SidebarButton({
	setCurrentPage,
	click,
	icon,
	name,
	gap,
	setGap,
	setSidebarOpacity,
	isMobile,
}) {
	return (
		<div
			className="
    px-[1.6rem] py-[0.3rem] w-full
    tablet:text-[1rem]
    others:text-[1.5rem]
    "
		>
			<button
				className="
        flex w-full items-center justify-between hover:bg-[#273250] flex-row text-white py-[0.8rem] rounded-[1rem] font-inter duration-300 outline-none
        others:px-[1.2rem]
        tablet:px-[1.2rem]
        "
				onClick={() => {
					setCurrentPage(click);
					if (isMobile) {
						setGap(cst.sidebarCollapsedWidth);
						setSidebarOpacity(0);
					}
				}}
			>
				<div className="flex flex-row">
					<div className="text-[1.5rem] pr-[1rem]">{icon}</div>
					<div className="text-left">{name}</div>
				</div>
			</button>
		</div>
	);
}

export default function Sidebar(props) {
	return (
		<div
			id="Sidebar"
			style={{ width: props.gap, opacity: props.sidebarOpacity }}
			className={
				props.isMobile
					? "h-screen fixed overflow-x-hidden z-1 duration-500 transition-all"
					: "h-screen overflow-x-hidden z-1 duration-500 transition-all"
			}
		>
			<div
				className="
      h-full w-full flex flex-col justify-between pb-[1rem] rounded-r-[1.5rem]
    "
				style={{
					background: "linear-gradient(270deg, #0C1228, #0f1839)",
				}}
			>
				<div>
					<div
						className="
          w-full text-white font-inter flex flex-col justify-center items-center 
          others:text-[2rem]
          desktop:text-[1.5rem] 
          HD:text-[1.5rem]
          others:h-[14rem]
          mid:h-[12rem]
          tablet:h-[10rem] 
          "
					>
						<div className="text-center p-[1rem] rounded-[2rem] border-2 border-white">
							<p>CARBON</p>
							<p>WARRIORS</p>
						</div>
					</div>
					<div className="others:h-[45vh] laptop:h-[42vh] pt-[0.7rem]">
						{sideButtons.map((item, index) => {
							return (
								<SidebarButton
									key={index}
									icon={item.icon}
									name={item.name}
									click={item.click}
									setCurrentPage={props.setCurrentPage}
									gap={props.gap}
									setGap={props.setGap}
									setSidebarOpacity={props.setSidebarOpacity}
									isMobile={props.isMobile}
								/>
							);
						})}
					</div>
				</div>
				<div className="w-full h-[10%] flex flex-row text-black">
					<div className="w-full h-full flex justify-center items-center">
						<div className="bg-white rounded-full p-[0.5rem] flex justify-center items-center cursor-pointer">
							<BsFacebook className="text-[1.5rem]" />
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center">
						<div className="bg-white rounded-full p-[0.5rem] flex justify-center items-center cursor-pointer">
							<BsTwitter className="text-[1.5rem]" />
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center">
						<div className="bg-white rounded-full p-[0.5rem] flex justify-center items-center cursor-pointer">
							<BsInstagram className="text-[1.5rem]" />
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center">
						<div className="bg-white rounded-full p-[0.5rem] flex justify-center items-center cursor-pointer">
							<SiGmail className="text-[1.5rem]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
