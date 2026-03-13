import Icon from "./icon";

interface SquareIconProps {
	icon: React.ComponentProps<typeof Icon>["svg"];
	className?: string;
}

export default function SquareIcon({
	icon,
	className,
	...props
}: SquareIconProps) {
	return (
		<div
			className="bg-yellow-dark w-14 h-14 rounded-lg flex items-center justify-center group-hover:brightness-110 transition-colors"
			{...props}
		>
			<Icon svg={icon} className="stroke-yellow fill-none" />
		</div>
	);
}
