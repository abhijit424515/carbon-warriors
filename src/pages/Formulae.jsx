import React from "react";

export default function Formulae() {
	return (
		<div className="h-max min-h-full w-full flex flex-col justify-center items-start py-[3rem] px-[2rem] laptop:text-[1.2rem]">
			<p className="text-[1.6rem] font-bold pb-[1rem]">
				Walk, Drive a Car, or Ride a Bike?
			</p>
			<p>
				Let's calculate carbon dioxide released by going from point A to point
				B.
			</p>
			<p>
				Let's say I want to travel 3.2 kilometers, If we walk three miles(4.8km)
				per hour, it would take us 40 minutes to reach Point B walking 4.8km an
				hour.
			</p>
			<p>
				If we ride a bicycle at 8 miles (12.8 kilometers) per hour on average,
				it would take 15 minutes to get to Point B.
			</p>
			<p>
				So, for an average person, walking at 3 miles per hour (4.8 km/hr) burns
				250 kCal, while riding a bicycle at 8 miles per hour (12.8 kilometers
				per hour) burns 280 kCal.
			</p>
			<p>
				Which means the number of kCal burned going from Point A to Point B is:
				167 kCal for walking for 40 minutes, compared to 56 kCal for 40 minutes
				at rest and 70 kCal for riding a bicycle for 15 minutes, compared to 21
				kCal for 15 minutes at rest ("At rest" data is taken from the sources).
			</p>
			<p>
				The carbon dioxide we produce by going two miles on foot or on a bicycle
				is then, if we count the total: 0.7 kg CO2 per 2000 kCal times 167 kCal:
				0.058 kg CO2 walking 0.7 kg CO2 per 2000 kCal times 70 kCal: 0.025 kg
				CO2 biking.
			</p>
			<p>
				But the “extra cost” of traveling the distance should be the difference
				between the “exercising” number and the “at rest” number, namely: 0.7 kg
				per 2000 kCal times (167-56) kCal = 0.039 kg of extra CO2 walking 0.7 kg
				per 2000 kCal times (70-21) kCal = 0.017 kg of extra CO2 riding a bike.
			</p>
			<p>
				Thus: traveling the 2 miles (3.2 kilometers) produces this amount of CO2
				above what was produced by respiration at rest: Traveling 2 miles (3.2
				kilometers) By car: 0.88 kg CO2, Walking: 0.039 kg CO2, Riding a bike:
				0.017 kg CO2.
			</p>
			<p className="pb-[2rem]">
				So basically, cycling is greener than walking!!!!
			</p>
		</div>
	);
}
