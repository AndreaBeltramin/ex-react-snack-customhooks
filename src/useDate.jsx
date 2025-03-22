import { useState, useEffect } from "react";

export default function useDate() {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const intervalDate = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);
		return () => clearInterval(intervalDate);
	}, []);

	return currentDate;
}
