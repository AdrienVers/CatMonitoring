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

const PawStep = () => {
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
					label: "Nombre de pas",
					data: [0, 42, 1046, 370, 590, 200, 126, 400, 946, 540],
					borderColor: "rgb(103,188,230)",
					backgroundColor: "rgb(103,188,230)",
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
				<TitleModale title={"Nombre de pas dans la journée"} />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Bar data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PawStep;
