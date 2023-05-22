import React, { useState, useEffect } from "react";
import styles from "./graph.module.scss";
import { Doughnut } from "react-chartjs-2";
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

const FavoritePlace = () => {
	const [chartData, setChartData] = useState<ChartDataType>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				"Chambre1",
				"Chambre2",
				"Cuisine",
				"Salon",
				"Salle de bain",
				"Jardin",
			],
			datasets: [
				{
					label: "%",
					data: [40, 5, 5, 20, 2, 28],
					backgroundColor: [
						"rgba(233,164,100, 0.5)",
						"rgba(35,45,70, 0.8)",
						"rgba(137,213,239,0.7)",
						"rgba(0,98,163,0.7)",
						"rgba(230, 230, 230, 0.7)",
						"rgba(61,174,243, 0.6)",
					],
					borderColor: [
						"rgba(233,164,100, 1)",
						"rgba(35,45,70, 1)",
						"rgba(137,213,239,1)",
						"rgba(0,98,163,1)",
						"rgba(230, 230, 230, 1)",
						"rgba(61,174,243, 0.8)",
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
				<TitleModale title="Analyse des pièces préférées de la maison" />
				<div className={styles.description}>
					<div className={styles.graph}>
						<Doughnut data={chartData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavoritePlace;
