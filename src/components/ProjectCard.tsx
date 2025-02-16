import { slugifyStr } from "@utils/slugify";

export interface Props {
	title: string;
	preview?: string;
	code?: string;
	description: string;
}

export default function ProjectCard({ title, preview, code, description }: Props) {

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: "text-lg font-medium decoration-dashed hover:underline",
	};

	return (
		<li className="my-6">
			<h2 {...headerProps}
				className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>{title}</h2>
			<p>{description}</p>
			<div className="flex gap-3 text-[15px] mt-1">
				{code && <a
					href={code}
					target="_blank"
					className="inline-block decoration-dashed underline-offset-4 underline"
				>
					Code
				</a>}
				{preview && <a
					href={preview}
					target="_blank"
					className="inline-block decoration-dashed underline-offset-4 underline"
				>
					Preview
				</a>}
			</div>
		</li>
	);
}
