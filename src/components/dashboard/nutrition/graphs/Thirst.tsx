import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import TitleModale from "../../UI/modals/TitleModale";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

type DatasetType = {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
	yAxisID: string;
};

type ChartDataType = {
	labels?: string[];
	datasets: DatasetType[];
};

const Thirst = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				"00h00",
				"06h00",
				"08h00",
				"10h00",
				"12h00",
				"14h00",
				"16h00",
				"18h00",
				"20h00",
				"23h00",
			],
			datasets: [
				{
					label: "Quantité de croquettes mangées (en g)",
					data: [0, 0, 4, 6, 4, 4, 3, 1, 0.5, 0.5],
					borderColor: "rgb(16,160,108)",
					backgroundColor: "rgb(16,160,108)",
					yAxisID: "y",
				},
				{
					label: "Quantité d'eau bue (en mL)",
					data: [0, 0, 32, 15, 69, 21, 72, 40, 16, 8],
					borderColor: "rgb(15,108,189)",
					backgroundColor: "rgb(15,108,189)",
					yAxisID: "y1",
				},
			],
		});
		setChartOptions({
			interaction: {
				mode: "index" as const,
				intersect: false,
			},
			stacked: false,
			scales: {
				y: {
					type: "linear" as const,
					display: true,
					position: "left" as const,
				},
				y1: {
					type: "linear" as const,
					display: true,
					position: "right" as const,
					grid: {
						drawOnChartArea: false,
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
				<TitleModale title="Alimentation et hydratation du 20/05/2023" />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Line data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Thirst;
