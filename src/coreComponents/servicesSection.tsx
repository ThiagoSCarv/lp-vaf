import CardServices from "../componets/cardServices";
import { Text } from "../componets/text";
import Heart from "../assets/heart.svg?react";
import Building from "../assets/building-2.svg?react";
import { weddings, business } from "../utils/itemsCard";

interface ServiceSectionProps extends React.ComponentProps<"section"> {
	className?: string;
}

export default function ServiceSection({
	className,
	...props
}: ServiceSectionProps) {
	return (
		<section className="py-24 bg-gray-500" {...props}>
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Text
						as="span"
						variant="light-raleway-sm"
						className="text-yellow uppercase mb-4 tracking-[0.3em] "
					>
						Nossos Serviços
					</Text>
					<Text as="h2" variant="title-3xl" className="text-gray-100">
						O que fazemos de{" "}
						<Text
							as="strong"
							variant="title-3xl"
							className="text-gradient-gold"
						>
							melhor
						</Text>
					</Text>
				</div>
				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<CardServices icon={Heart} title="Casamentos" list={weddings}>
						Filmes emocionantes, com narrativa cinematográfica e olhar sensível
						para cada detalhe do seu grande dia.
					</CardServices>
					<CardServices icon={Building} title="Corporativo" list={business}>
						Produções modernas para empresas que querem transmitir
						profissionalismo e autoridade.
					</CardServices>
				</div>
			</div>
		</section>
	);
}
