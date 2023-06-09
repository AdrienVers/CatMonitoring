import React from "react";
import Head from "next/head";
import IntellectLayout from "../components/dashboard/intellect/IntellectLayout";

function Intellect() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Head>
				<title>{"Cat'Monitoring - Intellect"}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<IntellectLayout />
		</div>
	);
}

export default Intellect;
