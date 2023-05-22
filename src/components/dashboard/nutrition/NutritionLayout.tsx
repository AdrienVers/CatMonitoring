import React from "react";
import styles from "./nutritionLayout.module.scss";
import Thirst from "./graphs/Thirst";
import Weight from "./graphs/Weight";
import PawStep from "./graphs/PawStep";
import WayOut from "./graphs/WayOut";
import Separation from "../UI/separations/Separation";
import ResponsiveSeparation from "../UI/separations/ResponsiveSeparation";
import BottomSeparation from "../UI/separations/BottomSeparation";
import Description from "./description/Description";

function NutritionLayout() {
	return (
		<div className={styles.container}>
			<Separation />
			<div className={styles.descriptions}>
				<Description
					title={"Analyse du régime alimentaire"}
					list={[
						"Régime varié et équilibré.",
						"Poids normal pour le gabarit du chat (≈ 4 kg).",
						"Doit boire d'avantage d'eau (200 mL par jour).",
					]}
				/>
				<ResponsiveSeparation />
				<Description
					title={"Recommandations du vétérinaire"}
					list={[
						"Suzy a besoin de 30g de croquettes par jour.",
						"Veillez à la bonne hydratation de Suzy.",
						"Limitez à une portion de pâté par jour.",
					]}
				/>
			</div>
			<Separation />
			<div className={styles.graphs}>
				<Thirst />
				<ResponsiveSeparation />
				<Weight />
			</div>
			<Separation />
			<div className={styles.graphs}>
				<PawStep />
				<ResponsiveSeparation />
				<WayOut />
			</div>
			<BottomSeparation />
		</div>
	);
}

export default NutritionLayout;
