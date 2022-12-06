import React, { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const content = [
	{
		h1: "What is Carbon Footprint?",
		p: "Carbon footprint is a measure of total greenhouse gas emitted during an individual event, an organization,a service,a place or product, expressed in the equivalents of carbon dioxide.",
	},
	{
		h1: "How does carbon footprint impact us?",
		p: "Our carbon footprint has a negative impact on the environment in multiple ways: It is the main cause of human-induced climate change, it contributes to urban air pollution, it leads to toxic acid rain, it adds to coastal and ocean acidification, and it worsens the melting of glaciers and polar ice.",
	},
	{
		h1: "Our initiatives?",
		p: "The purpose of this website is to educate our loved ones how carbon footprint is associated with the simplest of activities, such as, walking and cycling. We are trying to device a system which will provide you with the carbon footprint of any activity, and will guide you if it's safe for our environment or not.",
	},
];

export default function Home() {
	const [index, setIndex] = useState(0);
	return (
		<div
			className="w-full h-full"
			style={{
				display: "grid",
			}}
		>
			<div
				className="h-full w-full flex flex-col justify-center items-center"
				style={{ gridColumn: 1, gridRow: 1 }}
			>
				<div className="w-full h-full flex justify-between items-center">
					<button
						className="w-[10%] h-1/2 z-50 others:hidden tablet:block outline-none"
						onClick={() => setIndex((index - 1 + 3) % 3)}
					>
						<div className="flex justify-center items-center text-[3rem]">
							<AiOutlineLeftCircle />
						</div>
					</button>
					<div className="w-full h-full flex flex-col items-center justify-center text-center">
						<div className="w-3/4">
							<p className="text-[2rem] py-[1.5rem]">{content[index].h1}</p>
							<p className="text-[1.2rem] py-[1.5rem]">{content[index].p}</p>
						</div>
					</div>
					<button
						className="w-[10%] h-1/2 z-50 others:hidden tablet:block outline-none"
						onClick={() => setIndex((index + 1) % 3)}
					>
						<div className="flex justify-center items-center text-[3rem]">
							<AiOutlineRightCircle />
						</div>
					</button>
				</div>
				<div
					className="w-full h-1/3 flex-row justify-center items-center others:flex tablet:hidden"
					style={{ gridColumn: 1, gridRow: 1 }}
				>
					<button
						className="text-white text-[3rem] h-[4rem] w-[4rem] rounded-full mx-[1rem] flex justify-center items-center outline-none"
						onClick={() => setIndex((index - 1 + 3) % 3)}
					>
						<AiOutlineLeftCircle />
					</button>
					<button
						className="text-white text-[3rem] h-[4rem] w-[4rem] rounded-full mx-[1rem] flex justify-center items-center outline-none"
						onClick={() => setIndex((index + 1) % 3)}
					>
						<AiOutlineRightCircle />
					</button>
				</div>
			</div>
		</div>
	);
}
