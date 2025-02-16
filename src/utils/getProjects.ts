interface Project {
	title: string;
	description: string;
	code: string;
	preview?: string;
	featured: boolean;
}


const projects: Project[] = [
	{
		title: "Nand2Tetris",
		description: "Building a modern computer from First Principles. I also run a book club on it at https://dxclub.io/build",
		code: "https://github.com/RohitDhatrak/Nand2Tetris",
		featured: true,
	},
	{
		title: "gosh",
		description: "An interactive shell built in golang. It has a few built-in commands and support for running all external commands.",
		code: "https://github.com/RohitDhatrak/gosh",
		featured: true,
	},
];

export const getAllProjects = () => {
	return projects;
};

export const getFeaturedProjects = () => {
	return projects.filter((project) => project.featured);
};
