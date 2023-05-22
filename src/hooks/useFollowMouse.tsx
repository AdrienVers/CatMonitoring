import { useState, useEffect, useRef } from "react";

const useFollowMouse = () => {
	const [isHovered, setIsHovered] = useState(false);
	const cursorRef = useRef<HTMLDivElement>(null);

	const followMouse = (e: any) => {
		const x = e.clientX;
		const y = e.clientY;

		cursorRef.current &&
			(cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`);
	};

	useEffect(() => {
		window.addEventListener("mousemove", followMouse);

		return () => {
			window.removeEventListener("mousemove", followMouse);
		};
	}, []);

	return { isHovered, setIsHovered, cursorRef };
};

export default useFollowMouse;
