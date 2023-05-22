import React from "react";
import styles from "./device.module.scss";
import useFollowMouse from "../../../../../hooks/useFollowMouse";

interface Props {
	rate: number;
	gradientName: string;
	gradientColors: { start: string; end: string };
	svgPath: string;
}

const Device = ({ rate, gradientName, gradientColors, svgPath }: Props) => {
	const { isHovered, setIsHovered, cursorRef } = useFollowMouse();

	return (
		<div className={styles.container}>
			<svg viewBox="0 0 300 300">
				<defs>
					<linearGradient id={gradientName} x1="0%" y1="0%" x2="0%" y2="100%">
						<stop stopColor={gradientColors.start} offset={rate + "%"} />
						<stop stopColor={gradientColors.end} offset={rate + "%"} />
					</linearGradient>
				</defs>
				<g
					transform="translate(0,300) scale(0.1,-0.1)"
					onMouseOver={() => setIsHovered(true)}
					onMouseOut={() => setIsHovered(false)}
				>
					<path d={svgPath} fill={`url(#${gradientName})`} stroke="none" />
				</g>
			</svg>
			{isHovered && (
				<div className={styles.cursor} ref={cursorRef}>
					{rate + "%"}
				</div>
			)}
		</div>
	);
};

export default Device;
