import React, { useState } from "react";
import styles from "./overview.module.scss";
import Image from "next/image";
import { DEVICE_DATA } from "./device/deviceData";
import Device from "./device/Device";
import TitleModale from "../../UI/modals/TitleModale";

function Overview() {
	const [foodRate, setFoodRate] = useState(75);
	const [waterRate, setWaterRate] = useState(55);
	const [litterRate, setLitterRate] = useState(80);

	const rates = [foodRate, waterRate, litterRate];
	const setRates = [setFoodRate, setWaterRate, setLitterRate];

	return (
		<div className={styles.container}>
			<div className={styles.modale}>
				<TitleModale title={"Vue d'ensemble"} />
				<div className={styles.description}>
					<div className={styles.illustrations}>
						{DEVICE_DATA.map((item, index) => (
							<div className={styles.illustration} key={index}>
								<Device
									rate={rates[index]}
									gradientName={item.gradientName}
									gradientColors={item.gradientColors}
									svgPath={item.svgPath}
								/>
								<Image
									className={styles.image}
									width={200}
									src={item.image}
									alt={item.imageName}
								/>
								<button onClick={() => setRates[index](100)}>
									{item.buttonTitle}
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overview;
