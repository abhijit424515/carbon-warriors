import React, { useState } from "react";
import Iframe from "react-iframe";
import { HiMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import user from "../assets/user.jpg";

export default function ContactUs() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	};

	return (
		<div className="w-full laptop:h-full others:h-[200%]  flex flex-col p-[2rem]">
			<div className="w-full h-full flex flex-col">
				<div className="w-full h-full py-[1rem] flex flex-row justify-center items-center others:flex-wrap laptop:flex-nowrap">
					<div className="w-full h-3/4 flex flex-col justify-between text-[1.2rem] mr-[0.5rem]">
						<p className="text-[2rem] font-bold">Carbon Warriors</p>
						<p className="">Indian Institute of Technology, Bombay - 400076</p>
						<p className="flex flex-row items-center">
							<IoMdCall className="mr-[1rem]" /> +91 999-9999-999
						</p>
						<p className="flex flex-row items-center">
							<IoMdCall className="mr-[1rem]" /> +91 888-9999-999
						</p>
						<p className="flex flex-row items-center">
							<HiMail className="mr-[1rem]" /> carbonwarriorsco2@gmail.com
						</p>
					</div>
					<div className="w-full h-3/4 flex flex-col justify-center text-[1.2rem] ml-[0.5rem]">
						<p className="text-[2rem] font-bold">Team</p>
						<div className="w-full h-full flex flex-row justify-between">
							<div className="w-1/4 flex justify-center items-center">
								<img src={user} className=" rounded-full w-full object-cover" />
							</div>
							<div className="w-[5%]"></div>
							<div className="w-1/4 flex justify-center items-center">
								<img src={user} className=" rounded-full w-full object-cover" />
							</div>
							<div className="w-[5%]"></div>
							<div className="w-1/4 flex justify-center items-center">
								<img src={user} className=" rounded-full w-full object-cover" />
							</div>
							<div className="w-[5%]"></div>
							<div className="w-1/4 flex justify-center items-center">
								<img src={user} className=" rounded-full w-full object-cover" />
							</div>
						</div>
					</div>
				</div>
				<p className="text-[1.5rem] pb-[1rem]">Let's talk</p>
				<div className="w-full h-full flex flex-row others:flex-wrap laptop:flex-nowrap">
					<div className="w-full mr-[0.5rem]">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col w-full h-full text-black"
						>
							<div className="w-full h-full flex flex-col">
								<div className="flex flex-row mb-[1rem]">
									<input
										className="w-full p-[0.5rem] mr-[0.5rem] rounded-tl-[1rem] outline-none"
										type="text"
										placeholder="Name"
										name="name"
										value={inputs.name || ""}
										onChange={handleChange}
									/>
									<input
										className="w-full p-[0.5rem] ml-[0.5rem] rounded-tr-[1rem] outline-none"
										type="email"
										placeholder="Email"
										name="email"
										value={inputs.email || ""}
										onChange={handleChange}
									/>
								</div>
								<div className="w-full h-full">
									<input
										className="w-full h-full p-[0.5rem] outline-none"
										type="text"
										placeholder="Message"
										name="msg"
										value={inputs.msg || ""}
										onChange={handleChange}
									/>
								</div>
								<button
									type="submit"
									className="bg-red-300 p-[0.5rem] mt-[1rem] rounded-b-[1rem] outline-none"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="w-full ml-[0.5rem]">
						<Iframe
							className="h-full w-full rounded-[1rem] outline-none border-none"
							src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4121005393426!2d72.91107921490203!3d19.133430187054966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1670328553015!5m2!1sen!2sin&z=14`}
						></Iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
