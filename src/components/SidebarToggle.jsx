import React, { useEffect } from "react";
import { AiOutlineStar, AiOutlineBell } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { CgMenuBoxed } from "react-icons/cg";
import * as cst from "../Constants";

const name = "Aayush";

export default function SidebarToggle({
	gap,
	setGap,
	resetScreenSize,
	setSidebarOpacity,
}) {
	let isMobile = window.innerWidth / window.innerHeight < cst.breakpoint;

	useEffect(() => {
		if (isMobile) {
			resetScreenSize();
		}
	}, []);

	return (
		<button
			id="SidebarToggleButton"
			onClick={async () => {
				if (gap === cst.sidebarCollapsedWidth) {
					if (isMobile) {
						setGap(cst.sidebarMobileWidth);
					} else setGap(cst.sidebarLaptopWidth);
					setSidebarOpacity(1);
				} else {
					setGap(cst.sidebarCollapsedWidth);
					setSidebarOpacity(0);
				}
			}}
			className="fixed ml-[1rem] z-50 outline-none"
		>
			<CgMenuBoxed
				className="text-white text-[2rem] others:h-[8rem]
          mid:h-[6rem]
          tablet:h-[4rem]"
			/>
		</button>
	);
}
