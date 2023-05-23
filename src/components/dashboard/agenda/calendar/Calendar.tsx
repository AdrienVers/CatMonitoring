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

	const current_date = new Date();
	const [month, setMonth] = useState(current_date.getMonth() + 1);
	const [year, setYear] = useState(current_date.getFullYear());
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
							events={[
								{ title: "Vétérinaire", date: "2022-11-22" },
								{ title: "Vermifuge", date: "2022-12-02" },
								{ title: "Anti-Puce", date: "2023-01-02" },
								{ title: "Ostéopathe", date: "2023-04-03" },
								{ title: "Anti-Puce", date: "2023-05-01" },
								{ title: "Vermifuge", date: "2023-05-17" },
								{ title: "Vétérinaire", date: "2023-06-08" },
								{ title: "Ostéopathe", date: "2023-07-17" },
								{ title: "Anti-Puce", date: "2023-08-01" },
								{ title: "Vermifuge", date: "2023-10-10" },
							]}
							eventClassNames={styles.eventColor}
							dayCellClassNames={(cell) => {
								const date = cell.date;
								const today = new Date();

								if (
									date.getDate() === today.getDate() &&
									date.getMonth() === today.getMonth() &&
									date.getFullYear() === today.getFullYear()
								) {
									return [styles.today];
								}
								return [styles.days];
							}}
							dayCellContent={(content) => {
								const date = content.date;
								const today = new Date();

								if (
									date.getDate() === today.getDate() &&
									date.getMonth() === today.getMonth() &&
									date.getFullYear() === today.getFullYear()
								) {
									return (
										<div className={styles.today}>{content.dayNumberText}</div>
									);
								}
								return (
									<div className={styles.dateNumber}>
										{content.dayNumberText}
									</div>
								);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calendar;
