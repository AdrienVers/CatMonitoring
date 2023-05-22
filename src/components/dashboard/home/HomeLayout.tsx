import React from "react";
import styles from "./HomeLayout.module.scss";
import Overview from "./overview/Overview";
import Localisation from "./localisation/Localisation";
import Appointment from "./appointment/Appointment";
import Separation from "../UI/separations/Separation";
import ResponsiveSeparation from "../UI/separations/ResponsiveSeparation";
import BottomSeparation from "../UI/separations/BottomSeparation";
import { APPOINTMENT_DATA } from "./appointment/appointmentData";

function HomeLayout() {
	return (
		<div className={styles.container}>
			<Separation />
			<div className={styles.appointments}>
				{APPOINTMENT_DATA.reduce((acc: any[], appointment, index) => {
					const isLast = index === APPOINTMENT_DATA.length - 1;
					return acc.concat(
						<Appointment
							key={index}
							title={appointment.title}
							date={appointment.date}
							vetImage={appointment.vetImage}
							vetName={appointment.vetName}
							vetEmail={appointment.vetEmail}
							description={appointment.description}
						/>,
						isLast ? [] : <ResponsiveSeparation key={index + "separationId"} />,
					);
				}, [])}
			</div>
			<Separation />
			<Overview />
			<Separation />
			<Localisation />
			<BottomSeparation />
		</div>
	);
}

export default HomeLayout;
