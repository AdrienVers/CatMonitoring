import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";
import styles from "./calendar.module.scss";
import TitleModale from "../../UI/modals/TitleModale";

function Calendar() {
	let myLocale = {
		...frLocale,
		buttonText: {
			...frLocale.buttonText,
			today: "Aujourd'hui",
		},
	};

	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(0);
	const calendarRef = useRef<FullCalendar | null>(null);

	const monthNames = [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Décembre",
	];

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const monthName = month ? capitalizeFirstLetter(monthNames[month - 1]) : "";

	const handleDatesSet = () => {
		if (calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			const date = calendarApi.getDate();

			setMonth(date.getMonth() + 1);
			setYear(date.getFullYear());
		}
	};

	const handleNext = () => {
		if (calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.next();
		}
	};

	const handlePrev = () => {
		if (calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.prev();
		}
	};

	const handleToday = () => {
		if (calendarRef.current) {
			const calendarApi = calendarRef.current.getApi();
			calendarApi.today();
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (calendarRef.current) {
				const calendarApi = calendarRef.current.getApi();
				calendarApi.refetchEvents();
			}
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.modale}>
				<TitleModale title="Agenda" />
				<div className={styles.description}>
					<div className={styles.calendar}>
						<div className={styles.header}>
							<div className={styles.date}>
								<p>{`${monthName} ${year}`}</p>
							</div>
							<div className={styles.buttons}>
								<button onClick={handlePrev}>
									<i className="fa-solid fa-caret-left" />
								</button>
								<button onClick={handleToday}>{"Aujourd'hui"}</button>
								<button onClick={handleNext}>
									<i className="fa-solid fa-caret-right" />
								</button>
							</div>
						</div>
						<FullCalendar
							ref={(calendar) => {
								calendarRef.current = calendar;
							}}
							plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
							initialView={"dayGridMonth"}
							locales={[myLocale]}
							locale="fr"
							datesSet={handleDatesSet}
							headerToolbar={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calendar;
