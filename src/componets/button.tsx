import WhatsIcon from "../assets/whatsapp-svgrepo-com.svg?react";
import Icon from "./icon";
import { Text } from "./text";

interface ButtonProps extends React.ComponentProps<"a"> {
	className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<a
			className="transition-all duration-300 bg-green-base rounded-lg py-4 px-8 shadow-lg flex justify-center items-center gap-3 hover:shadow-xl hover:scale-105 hover:brightness-110"
			{...props}
		>
			<Icon svg={WhatsIcon} className="fill-gray-100 max-w-7 max-h-7" />
			<Text variant="bold-raleway-base" className="text-gray-100">
				{children}
			</Text>
		</a>
	);
}
