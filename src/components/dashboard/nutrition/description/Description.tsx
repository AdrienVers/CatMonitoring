import React from "react";
import styles from "./description.module.scss";
import TitleModale from "../../UI/modals/TitleModale";

interface Props {
    title: string;
    list: string[];
}

function Description({title, list}:Props) {
	return (
		<div className={styles.container}>
			<div className={styles.modale}>
				<TitleModale title={title} />
				<div className={styles.description}>
					<ul>
						{list.map((item:any, index:any) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Description;
