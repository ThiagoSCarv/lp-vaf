import type Icon from "./icon";
import ListCard from "./listCard";
import SquareIcon from "./squareIcon";
import { Text } from "./text";

interface CardServicesProps extends React.ComponentProps<"div"> {
	title: string;
	children: string;
	icon: React.ComponentProps<typeof Icon>["svg"];
	list: string[];
	className?: string;
}

export default function CardServices({
	title,
	children,
	icon,
	list,
	className,
	...props
}: CardServicesProps) {
	return (
		<div
			className="bg-gray-400 border border-gray-300 rounded-xl p-8 md:p-10 hover:border-yellow transition-colors duration-500 group flex flex-col gap-6"
			{...props}
		>
			<div className="flex flex-col gap-5">
				<SquareIcon icon={icon} className="mb-3" />
				<Text as="h3" variant="title-2xl" className="text-gray-100">
					{title}
				</Text>
				<Text as="span" variant="light-raleway-lg" className="text-gray-300">
					{children}
				</Text>
			</div>
			<ul className="flex flex-col gap-3">
				{list.map((item, index) => {
					return <ListCard key={`${item}-${index}`}>{item}</ListCard>;
				})}
			</ul>
		</div>
	);
}
