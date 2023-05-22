import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Radar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import TitleModale from "../../UI/modals/TitleModale";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

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

const Psychology = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				"Indépendance",
				"Curiosité",
				"Affectiosité",
				"Méfiance",
				"Calme",
				"Expressif",
				"Logique",
			],
			datasets: [
				{
					label: "Score",
					data: [50, 60, 80, 30, 60, 60, 80],
					backgroundColor: ["rgba(61,174,243, 0.4)"],
					borderColor: ["rgb(61,174,243)"],
					borderWidth: 1,
				},
			],
		});
		setChartOptions({
			scales: {
				r: {
					min: 0,
					max: 100,
					ticks: {
						stepSize: 20,
					},
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.graphContainer}>
				<TitleModale title={"Analyse de la personnalité"} />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Radar data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Psychology;
