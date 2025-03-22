import { useState } from "react";

export default function useSwitch() {
	const [isOn, setIsOn] = useState(false);

	console.log(isOn);

	const toggle = () => {
		setIsOn((curr) => !curr);
	};
	return { isOn, toggle };
}
