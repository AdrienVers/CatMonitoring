interface SidebarData {
	title: string;
	icon: string;
	path: string;
}

export const SIDEBAR_DATA: SidebarData[] = [
	{
		title: "Accueil",
		icon: "fa-solid fa-house",
		path: "/",
	},
	{
		title: "Régime",
		icon: "fa-solid fa-fish",
		path: "/regime",
	},
	{
		title: "Agenda",
		icon: "fa-solid fa-stethoscope",
		path: "/agenda",
	},
	{
		title: "Intellect",
		icon: "fa-solid fa-shapes",
		path: "/intellect",
	},
];
