import React from "react";
import styles from "./IntellectLayout.module.scss";
import Psychology from "./graphs/Psychology";
import TimeActivity from "./graphs/TimeActivity";
import Purring from "./graphs/Purring";
import FavoritePlace from "./graphs/FavoritePlace";
import Separation from "../UI/separations/Separation";
import ResponsiveSeparation from "../UI/separations/ResponsiveSeparation";
import BottomSeparation from "../UI/separations/BottomSeparation";

function IntellectLayout() {
	return (
		<div className={styles.container}>
			<Separation />
			<div className={styles.graphs}>
				<Psychology />
				<ResponsiveSeparation />
				<TimeActivity />
			</div>
			<Separation />
			<div className={styles.graphs}>
				<Purring />
				<ResponsiveSeparation />
				<FavoritePlace />
			</div>
			<BottomSeparation />
		</div>
	);
}

export default IntellectLayout;
