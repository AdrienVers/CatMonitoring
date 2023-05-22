import React from "react";
import styles from "./titleModale.module.scss";

interface Props {
	title: string;
}

function TitleModale({ title }: Props) {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
		</div>
	);
}

export default TitleModale;
