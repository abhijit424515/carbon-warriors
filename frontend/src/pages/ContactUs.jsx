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

	return (
		<div className="w-full laptop:h-full others:h-[200%]  flex flex-col p-[2rem]">
			<div className="w-full h-full flex flex-col">
				<div className="w-full h-full py-[1rem] flex flex-row justify-center items-center others:flex-wrap laptop:flex-nowrap">
					<div className="w-full h-4/5 flex flex-col justify-between text-[1.2rem] mr-[0.5rem]">
						<p className="text-[2rem] font-bold">Carbon Warriors</p>
						<p className="">
							Birla Institute of Technology & Science Pilani, Hyderabad
						</p>
						<p className="flex flex-row items-center">
							<IoMdCall className="mr-[1rem]" /> +91 7506693485
						</p>
						<p className="flex flex-row items-center">
							<IoMdCall className="mr-[1rem]" /> +91 8360623439
						</p>
						<p className="flex flex-row items-center">
							<IoMdCall className="mr-[1rem]" /> +91 9461962606
						</p>
						<p className="flex flex-row items-center">
							<HiMail className="mr-[1rem]" /> carbonwarriorsco2@gmail.com
						</p>
					</div>
					<div className="w-full h-4/5 flex flex-col justify-between text-[1.2rem] ml-[0.5rem]">
						<p className="text-[2rem] font-bold">About Us</p>
						<p>
							We are a group of students trying to make use of our technology to
							educate more people about carbon footprint emissions. Our main
							goal is to reduce the carbon footprint, and lend a helping hand
							for our environment
						</p>
					</div>
				</div>
				<p className="text-[1.5rem] pb-[1rem]">Let's talk</p>
				<div className="w-full h-full flex flex-row others:flex-wrap laptop:flex-nowrap">
					<div className="w-full mr-[0.5rem]">
						<form
							onSubmit={(event) => {
								event.preventDefault();
								console.log(inputs);
							}}
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
							src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.216125701517!2d78.56964931490195!3d17.544893902861233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb83594a86132d%3A0xc3e06e9e76cebf3d!2sBirla%20Institute%20of%20Technology%20%26%20Science%20Pilani%2C%20Hyderabad%20Campus!5e0!3m2!1sen!2sin!4v1670351586932!5m2!1sen!2sin"&z=14`}
						></Iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
