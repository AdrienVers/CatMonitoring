import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import TitleModale from "../../UI/modals/TitleModale";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

type DatasetType = {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
	borderWidth: number;
};

type ChartDataType = {
	labels?: string[];
	datasets: DatasetType[];
};

const WayOut = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				"Lundi",
				"Mardi",
				"Mercredi",
				"Jeudi",
				"Vendredi",
				"Samedi",
				"Dimanche",
			],
			datasets: [
				{
					label: "Nombre de passage par la chatière",
					data: [8, 5, 15, 9, 10, 32, 25],
					backgroundColor: "rgb(247,140,0)",
					borderColor: "rgb(247,140,0)",
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
				<TitleModale title="Nombre de sorties extérieures dans la semaine" />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Bar data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WayOut;
