import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import User from "../../assets/user1.png";

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Image className={styles.logo} width={27} src={Logo} alt="logo" />
				<span className={styles.title}>{"Cat'Monitoring"}</span>
				<span className={styles.description}>{"- Tableau de bord félin"}</span>
			</div>
			<div className={styles.userContainer}>
				<i className="fa-solid fa-bell" />
				<span>Adrien</span>
				<Image className={styles.userImage} width={35} src={User} alt="user" />
			</div>
		</div>
	);
}

export default Navbar;
