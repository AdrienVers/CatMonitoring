import React, { useEffect, useState } from "react";
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
	borderColor: string | string[];
	backgroundColor: string | string[];
	borderWidth: number;
};

type ChartDataType = {
	labels?: string[];
	datasets: DatasetType[];
};

const Weight = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const initialData = [4.4, 4.7, 4.3, 4.8, 4.0, 3.8];
		const colors = initialData.map((weight) => {
			if (weight > 4.5 || weight < 3.5) {
				return "rgba(255, 0, 0, 0.8)";
			} else {
				return "rgba(12, 200, 128, 0.8)";
			}
		});

		setChartData({
			labels: ["Décembre", "Janvier", "Février", "Mars", "Avril", "Mai"],
			datasets: [
				{
					label: "Poids (en kg)",
					data: initialData,
					backgroundColor: colors,
					borderColor: colors,
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
				<TitleModale title={"Poids sur les 6 derniers mois"} />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Bar data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weight;
