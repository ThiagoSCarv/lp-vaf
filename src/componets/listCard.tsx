import Icon from "./icon";
import Check from "../assets/check.svg?react";
import { Text } from "./text";

interface ListCardProps extends React.ComponentProps<"li"> {
	children: string;
	className?: string;
}

export default function ListCard({
	children,
	className,
	...props
}: ListCardProps) {
	return (
		<li className="flex items-center gap-3">
			<Icon svg={Check} className="stroke-yellow w-4.5 h-4.5" />
			<Text
				as="span"
				variant="light-raleway-sm"
				className="list-none text-gray-200"
				{...props}
			>
				{children}
			</Text>
		</li>
	);
}
