import React, { useEffect, useState } from "react";
import * as cst from "./Constants";

import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";

import Home from "./pages/Home";
import Calc from "./pages/Calc";
import Formulae from "./pages/Formulae";
import ContactUs from "./pages/ContactUs";

let sidebarWidth = cst.sidebarLaptopWidth;

export default function App() {
	const [currentPage, setCurrentPage] = useState("home");
	const [sidebarOpacity, setSidebarOpacity] = useState(0);

	let isMobile = window.innerWidth / window.innerHeight < cst.breakpoint;
	const [gap, setGap] = useState(cst.sidebarCollapsedWidth);
	const [width, setWidth] = React.useState(window.innerWidth);

	function resetScreenSize() {
		isMobile = window.innerWidth / window.innerHeight < cst.breakpoint;
		if (isMobile) {
			sidebarWidth = cst.sidebarMobileWidth;
			setGap(cst.sidebarCollapsedWidth);
			setSidebarOpacity(0);
		} else {
			sidebarWidth = cst.sidebarLaptopWidth;
			setGap(sidebarWidth);
			setSidebarOpacity(1);
		}
	}

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
			resetScreenSize();
		});
		resetScreenSize();
	}, []);

	return (
		<div className="h-full w-full flex font-inter bg-[#141e44]">
			<Sidebar
				gap={gap}
				setGap={setGap}
				sidebarOpacity={sidebarOpacity}
				setSidebarOpacity={setSidebarOpacity}
				isMobile={isMobile}
				setCurrentPage={setCurrentPage}
			/>
			<div id="main" className="h-screen w-full flex flex-col text-white">
				<SidebarToggle
					gap={gap}
					setGap={setGap}
					resetScreenSize={resetScreenSize}
					setSidebarOpacity={setSidebarOpacity}
				/>
				<div className="h-full w-full p-[1rem]">
					{currentPage == "home" && <Home />}
					{currentPage == "calc" && <Calc />}
					{currentPage == "formulae" && <Formulae />}
					{currentPage == "contactus" && <ContactUs />}
				</div>
			</div>
		</div>
	);
}
