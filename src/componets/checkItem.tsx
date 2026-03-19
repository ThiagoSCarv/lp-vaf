import type React from "react";
import Icon from "./icon";
import Check from "../assets/check.svg?react";
import { Text } from "./text";

interface CheckItemProps extends React.ComponentProps<"div"> {
	children: string;
	className?: string;
}

export default function CheckItem({
	children,
	className,
	...props
}: CheckItemProps) {
	return (
		<div
			className="flex items-center gap-2 bg-gray-400 border border-gray-300 rounded-lg px-5 py-3"
			{...props}
		>
			<Icon svg={Check} className="stroke-yellow fill-none w-6 h-6" />
			<Text variant="light-raleway-sm" className="text-gray-200">
				{children}
			</Text>
		</div>
	);
}
