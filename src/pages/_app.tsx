import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";
import Calendar from "../components/dashboard/agenda/calendar/Calendar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={styles.container}>
			<Navbar />
			<Sidebar />
			<div className={styles.layout}>
				<Component {...pageProps} />
			</div>
		</div>
	);
}
