import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./appointment.module.scss";
import TitleModale from "../../UI/modals/TitleModale";
import useFollowMouse from "../../../../hooks/useFollowMouse";

interface Props {
	title: string;
	date: string;
	vetImage: StaticImageData;
	vetName: string;
	vetEmail: string;
	description: string;
}

function Appointment({
	title,
	date,
	vetImage,
	vetName,
	vetEmail,
	description,
}: Props) {
	const { isHovered, setIsHovered, cursorRef } = useFollowMouse();
	const [isCopied, setIsCopied] = useState(false);

	const handleEmailCopy = async () => {
		try {
			await navigator.clipboard.writeText(vetEmail);
			setIsCopied(true);
		} catch (err) {
			console.log("Failed to copy email", err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.modale}>
				<TitleModale title={title} />
				<div className={styles.description}>
					<div className={styles.time}>
						<p>
							<i className="fa-regular fa-clock" /> &nbsp; {date}
						</p>
					</div>
					<div className={styles.vet}>
						<Image
							className={styles.image}
							width={50}
							src={vetImage}
							alt="vet"
						/>
						<span>
							{vetName}
							<i
								className="fa-regular fa-envelope"
								onMouseOver={() => setIsHovered(true)}
								onMouseOut={() => setIsHovered(false)}
								onClick={handleEmailCopy}
							/>
						</span>
					</div>
					<div className={styles.indication}>
						<p>{description}</p>
					</div>
				</div>
			</div>
			{isHovered && (
				<div className={styles.cursor} ref={cursorRef}>
					{vetEmail}
					{isCopied ? (
						<i className="fa-regular fa-square-check" />
					) : (
						<i className="fa-solid fa-clone" />
					)}
				</div>
			)}
		</div>
	);
}

export default Appointment;
