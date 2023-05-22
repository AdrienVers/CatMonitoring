import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import TitleModale from "../../UI/modals/TitleModale";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type DatasetType = {
	data: number[];
	borderColor: string[];
	backgroundColor: string[];
	hoverBackgroundColor: string[];
	hoverBorderColor: string[];
	borderWidth: number;
};

type ChartDataType = {
	labels?: string[];
	datasets: DatasetType[];
};

const tooltipValues = ["> 25", "> 50", "> 75", "", ""];

const Purring = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["", "", "", "", ""],
			datasets: [
				{
					data: [25, 25, 25, 25],
					backgroundColor: [
						"rgba(227,116,113, 0.2)",
						"rgba(252,171,11,0.2)",
						"rgba(23,170,141,0.8)",
						"rgba(255, 255, 255, 1)",
					],
					borderColor: [
						"rgba(227,116,113, 0.3)",
						"rgba(252,171,11,0.3)",
						"rgba(23,170,141,1)",
						"rgba(255, 255, 255, 1)",
					],
					hoverBackgroundColor: [
						"rgba(227,116,113, 0.3)",
						"rgba(252,171,11,0.3)",
						"rgba(23,170,141,1)",
						"rgba(255, 255, 255, 1)",
					],
					hoverBorderColor: [
						"rgba(227,116,113, 1)",
						"rgba(252,171,11,1)",
						"rgba(23,170,141,1)",
						"rgba(255, 255, 255, 1)",
					],
					borderWidth: 1,
				},
			],
		});
		setChartOptions({
			cutout: "70%",
			rotation: -135,
			plugins: {
				title: {
					display: true,
					text: "88%",
					font: {
						size: 20,
						weight: "bold",
					},
				},
				legend: {
					display: false,
				},
				tooltip: {
					callbacks: {
						label: function (context: any) {
							var labelIndex = context.dataIndex;
							return tooltipValues[labelIndex];
						},
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
				<TitleModale title={"Jauge de ronronnement"} />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Doughnut data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purring;
