import React from "react";
import Calendar from "./calendar/Calendar";
import styles from "./agendaLayout.module.scss";
import Separation from "../UI/separations/Separation";
import BottomSeparation from "../UI/separations/BottomSeparation";

function AgendaLayout() {
	return (
		<div className={styles.container}>
			<Separation />
			<div className={styles.calendar}>
				<Calendar />
			</div>
			<BottomSeparation />
		</div>
	);
}

export default AgendaLayout;
