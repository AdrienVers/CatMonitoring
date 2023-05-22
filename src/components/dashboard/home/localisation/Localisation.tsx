import React from "react";
import styles from "./localisation.module.scss";
import Image from "next/image";
import Plan from "../../../../assets/plan.png";
import TitleModale from "../../UI/modals/TitleModale";
import useFollowMouse from "../../../../hooks/useFollowMouse";

function Localisation() {
	const { isHovered, setIsHovered, cursorRef } = useFollowMouse();

	return (
		<div className={styles.container}>
			<div className={styles.modale}>
				<TitleModale title={"Localisation en temps réel"} />
				<div className={styles.description}>
					<Image className={styles.plan} src={Plan} alt="plan" />
					<span
						onMouseOver={() => setIsHovered(true)}
						onMouseOut={() => setIsHovered(false)}
					>
						🐈
					</span>
				</div>
			</div>
			{isHovered && (
				<div className={styles.cursor} ref={cursorRef}>
					Suzy est dans le salon
				</div>
			)}
		</div>
	);
}

export default Localisation;
