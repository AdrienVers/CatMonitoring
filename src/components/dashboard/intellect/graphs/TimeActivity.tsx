import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TitleModale from "../../UI/modals/TitleModale";

ChartJS.register(ArcElement, Tooltip, Legend);

type DatasetType = {
	label: string;
	data: number[];
	borderColor: string[];
	backgroundColor: string[];
	borderWidth: number;
};

type ChartDataType = {
	labels?: string[];
	datasets: DatasetType[];
};

const TimeActivity = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["Manger", "Dormir", "Jouer", "Ronronner", "Ennui", "Autre"],
			datasets: [
				{
					label: "%",
					data: [20, 40, 5, 10, 10, 10],
					backgroundColor: [
						"rgba(233,164,100, 0.5)",
						"rgba(35,45,70, 0.8)",
						"rgba(137,213,239,0.7)",
						"rgba(0,98,163,0.7)",
						"rgba(61,174,243, 0.6)",
						"rgba(230, 230, 230, 0.7)",
					],
					borderColor: [
						"rgba(233,164,100, 1)",
						"rgba(35,45,70, 1)",
						"rgba(137,213,239,1)",
						"rgba(0,98,163,1)",
						"rgba(61,174,243, 0.8)",
						"rgba(230, 230, 230, 1)",
					],
					borderWidth: 1,
				},
			],
		});
		setChartOptions({
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.graphContainer}>
				<TitleModale title="Analyse des temps d'activité" />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Pie data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeActivity;
