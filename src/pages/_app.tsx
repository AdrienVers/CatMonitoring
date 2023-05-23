import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";
import AgendaLayout from "../components/dashboard/agenda/AgendaLayout";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Navbar />
			<Sidebar />
			<div className={styles.layout}>
				{router.pathname === "/agenda" ? (
					<div style={{ display: "flex", justifyContent: "center" }}>
						<AgendaLayout />
					</div>
				) : (
					<Component {...pageProps} />
				)}
			</div>
		</div>
	);
}
