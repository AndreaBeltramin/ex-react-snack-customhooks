import { useEffect, useState } from "react";

export default function useCustomPointer(component) {
	const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const mouseMove = (event) => {
			setPointerPosition({ x: event.clientX, y: event.clientY });
		};
		document.addEventListener("mousemove", mouseMove);
		return () => document.removeEventListener("mousemove", mouseMove);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: pointerPosition.y,
				left: pointerPosition.x,
				transform: "translate(-50%, -50%)",
				cursor: "none",
			}}
		>
			{component}
		</div>
	);
}
