import React from "react";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import Cat from "../../assets/chat.png";
import { SIDEBAR_DATA } from "./sidebarData";
import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
	const router = useRouter();

	const handleNavigation = (event: any) => {
		event.preventDefault();
		window.location.href = "/agenda";
	};

	return (
		<div className={styles.container}>
			<Image className={styles.image} width={90} src={Cat} alt="chat" />
			<span className={styles.name}>Suzy</span>
			<div className={styles.linksContainer}>
				{SIDEBAR_DATA.map((item, index) => {
					if (item.path === "/agenda") {
						return (
							<div
								className={`${styles.linkContainer} ${
									router.pathname === item.path ? styles.active : ""
								}`}
								key={index}
							>
								<div className={styles.link}>
									<a onClick={handleNavigation}>
										<i className={item.icon} />
										<span>{item.title}</span>
									</a>
								</div>
								<div className={styles.linkIndicator} />
							</div>
						);
					} else {
						return (
							<Link key={index} href={item.path} legacyBehavior>
								<div
									className={`${styles.linkContainer} ${
										router.pathname === item.path ? styles.active : ""
									}`}
									key={index}
								>
									<div className={styles.link}>
										<a href={item.path}>
											<i className={item.icon} />
											<span>{item.title}</span>
										</a>
									</div>
									<div className={styles.linkIndicator} />
								</div>
							</Link>
						);
					}
				})}
			</div>
		</div>
	);
}

export default Sidebar;
