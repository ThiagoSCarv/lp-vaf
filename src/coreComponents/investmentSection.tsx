import CircleIcon from "../componets/circleIcon";
import Shield from "../assets/shield.svg?react";
import { Text } from "../componets/text";
import CheckItem from "../componets/checkItem";
import Button from "../componets/button";

interface InvestmentSectionProps extends React.ComponentProps<"section"> {
	className?: string;
}
export default function InvestmentSection({
	className,
	...props
}: InvestmentSectionProps) {
	return (
		<section className="py-24 bg-gray-350" {...props}>
			<div className="container mx-auto px-6">
				<div className="max-w-3xl mx-auto flex flex-col justify-center text-center">
					<div className="mx-auto mb-6">
						<CircleIcon icon={Shield} className="" />
					</div>
					<Text as="h2" variant="title-3xl" className="mb-4 text-gray-100">
						Investimento{" "}
						<Text
							as="strong"
							variant="title-3xl"
							className="text-gradient-gold"
						>
							transparente e flexível
						</Text>
					</Text>
					<Text
						as="p"
						variant="light-raleway-lg"
						className="mb-8 text-gray-300"
					>
						Sabemos que cada cliente tem uma realidade diferente. Por isso
						trabalhamos com condições que se adaptam a você.
					</Text>
					<div className="flex flex-wrap justify-center gap-4 mb-10">
						<CheckItem>Opções de pacotes</CheckItem>
						<CheckItem>Condições de pagamento facilitadas</CheckItem>
						<CheckItem>Personalização conforme necessidade</CheckItem>
					</div>
					<Text
						as="p"
						variant="light-raleway-sm"
						className="mb-6 text-gray-300"
					>
						Clique no botão abaixo e receba seu orçamento personalizado.
					</Text>
					<div className="max-w-120 mx-auto">
						<Button href="https://wa.me/+5561993413543">
							RECEBER ORÇAMENTO PERSONALIZADO
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
