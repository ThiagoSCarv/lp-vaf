import type React from "react";
import Icon from "./icon";
import Star from "../assets/star.svg?react";
import Quote from "../assets/quote.svg?react";
import { Text } from "./text";

interface CardSocialProofProps extends React.ComponentProps<"div"> {
	children: string;
	name: string;
	service: string;
	className?: string;
}

export default function CardSocialProof({
	children,
	name,
	service,
	className,
	...props
}: CardSocialProofProps) {
	return (
		<div
			className="bg-gray-400 border border-gray-300 rounded-xl p-8 relative flex flex-col gap-4"
			{...props}
		>
			<div className="flex items-center">
				<div className="flex items-center gap-1">
					<Icon svg={Star} className="fill-yellow stroke-yellow w-4 h-4" />
					<Icon svg={Star} className="fill-yellow stroke-yellow w-4 h-4" />
					<Icon svg={Star} className="fill-yellow stroke-yellow w-4 h-4" />
					<Icon svg={Star} className="fill-yellow stroke-yellow w-4 h-4" />
					<Icon svg={Star} className="fill-yellow stroke-yellow w-4 h-4" />
				</div>
				<Icon
					svg={Quote}
					className="stroke-yellow-dark fill-none ml-auto w-8 h-8"
				/>
			</div>
			<Text
				as="span"
				variant="light-raleway-sm"
				className="text-gray-200 italic mb-2"
			>
				{children}
			</Text>
			<div className="flex flex-col">
				<Text as="strong" variant="bold-raleway-base" className="text-gray-100">
					{name}
				</Text>
				<Text as="span" variant="light-raleway-xs" className="text-gray-300">
					{service}
				</Text>
			</div>
		</div>
	);
}
