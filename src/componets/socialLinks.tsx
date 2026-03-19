import type React from "react";
import Icon from "./icon";

interface SocialLinksProps extends React.ComponentProps<"a"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	className?: string;
	link: string;
}

export default function SocialLinks({
	icon,
	link,
	className,
	...props
}: SocialLinksProps) {
	return (
		<a href={link} className="group" {...props}>
			<Icon
				svg={icon}
				className="stroke-gray-300 fill-none group-hover:stroke-yellow w-6 h-6"
			/>
		</a>
	);
}
