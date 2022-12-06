import React, { useState } from "react";
import { TbWalk } from "react-icons/tb";
import { MdDriveEta } from "react-icons/md";
import { BsBicycle } from "react-icons/bs";

export default function Calc() {
	const [input, setInput] = useState("");
	const [rate, setRate] = useState(0);
	const [output, setOutput] = useState("");

	return (
		<div className="h-full w-full flex flex-row justify-center items-center">
			<div className="laptop:h-1/2 laptop:w-3/5 others:w-[90%] others:h-[80%] flex flex-row others:flex-wrap laptop:flex-nowrap">
				<div className="w-full flex flex-col justify-between items-center p-[1rem]">
					<p className="text-center text-[1.6rem]">Mode of commuting</p>
					<button
						onClick={() => setRate(0.275)}
						className="p-[1rem] rounded-[1rem] bg-red-300 w-max flex justify-center items-center"
					>
						<TbWalk className="mr-[0.5rem] text-[1.2rem]" />
						Walking
					</button>
					<button
						onClick={() => setRate(0.012)}
						className="p-[1rem] rounded-[1rem] bg-red-300 w-max flex justify-center items-center"
					>
						<BsBicycle className="mr-[0.5rem] text-[1.2rem]" />
						Cycling
					</button>
					<button
						onClick={() => setRate(0.005)}
						className="p-[1rem] rounded-[1rem] bg-red-300 w-max flex justify-center items-center"
					>
						<MdDriveEta className="mr-[0.5rem] text-[1.2rem]" />
						Driving
					</button>
				</div>
				<div className="w-full flex flex-col justify-between p-[1rem]">
					<p className="text-center text-[1.6rem]">
						Enter the distance commuted (kms)
					</p>
					<input
						type="text"
						placeholder="input"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="p-[1rem] rounded-[1rem] text-black outline-none"
					/>
					<button
						onClick={() => {
							console.log(input * rate);
							setOutput((input * rate).toString() + " carbon footprint");
							setInput("");
						}}
						className="p-[1rem] rounded-[1rem] bg-red-300"
					>
						Submit
					</button>
					<p className="text-center p-[1rem] rounded-[1rem] bg-yellow-300 text-black">
						{output == "" ? <p className="text-yellow-300">s</p> : output}
					</p>
				</div>
			</div>
		</div>
	);
}
