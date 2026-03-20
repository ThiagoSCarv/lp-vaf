import type React from "react";
import { Text } from "../componets/text";
import CircleIcon from "../componets/circleIcon";
import User from "../assets/users.svg?react";
import Eye from "../assets/eye.svg?react";
import Sparkles from "../assets/sparkles.svg?react";
import Clock from "../assets/clock.svg?react";

interface DifferentialSectionProps extends React.ComponentProps<"section"> {
	className?: string;
}

export default function DifferentialSection({
	className,
	...props
}: DifferentialSectionProps) {
	return (
		<section className="py-24 bg-gray-400" {...props}>
			<div className="container mx-auto px-6">
				<div className="text-center mb-16 max-w-2xl mx-auto">
					<Text
						as="span"
						variant="light-raleway-sm"
						className="text-yellow tracking-[0.3em] uppercase mb-4"
					>
						Nosso Diferencial
					</Text>
					<Text as="h2" variant="title-3xl" className="text-gray-200 mb-6">
						Não entregamos apenas vídeos.{" "}
						<Text
							as="strong"
							variant="title-3xl"
							className="text-gradient-gold"
						>
							Entregamos experiências.
						</Text>
					</Text>
					<Text as="p" variant="light-raleway-sm" className="text-gray-300">
						Cada projeto é tratado com exclusividade
					</Text>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
					<div className="flex flex-col items-center gap-3 text-center p-6">
						<CircleIcon icon={User} className="mb-5" />
						<Text as="h3" variant="text-playfair-lg" className="text-gray-200">
							Atendimento próximo
						</Text>
						<Text as="p" variant="light-raleway-sm" className="text-gray-300">
							Relação humanizada do inicio ao fim.
						</Text>
					</div>
					<div className="flex flex-col items-center gap-3 text-center p-6">
						<CircleIcon icon={Eye} className="mb-5" />
						<Text as="h3" variant="text-playfair-lg" className="text-gray-200">
							Entendimento real
						</Text>
						<Text as="p" variant="light-raleway-sm" className="text-gray-300">
							Ouvimos e compreendemos o que você deseja.
						</Text>
					</div>
					<div className="flex flex-col items-center gap-3 text-center p-6">
						<CircleIcon icon={Sparkles} className="mb-5" />
						<Text as="h3" variant="text-playfair-lg" className="text-gray-200">
							Qualidade técnica e emocional
						</Text>
						<Text as="p" variant="light-raleway-sm" className="text-gray-300">
							Cada frame conta uma parte da sua história.
						</Text>
					</div>
					<div className="flex flex-col items-center gap-3 text-center p-6">
						<CircleIcon icon={Clock} className="mb-5" />
						<Text as="h3" variant="text-playfair-lg" className="text-gray-200">
							Compromisso com prazo
						</Text>
						<Text as="p" variant="light-raleway-sm" className="text-gray-300">
							Pontualidade na entrega, sempre.
						</Text>
					</div>
				</div>
			</div>
		</section>
	);
}
