import Icon from "./icon";

interface CircleIconProps extends React.ComponentProps<"div"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	className?: string;
}

export default function CircleIcon({
	icon,
	className,
	...props
}: CircleIconProps) {
	return (
		<div
			className="flex justify-center items-center w-16 h-16 rounded-full bg-yellow-dark"
			{...props}
		>
			<Icon svg={icon} className="stroke-yellow fill-yellow-dark" />
		</div>
	);
}
