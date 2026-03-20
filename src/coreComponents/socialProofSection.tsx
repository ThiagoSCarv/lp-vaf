import type React from "react";
import { Text } from "../componets/text";
import Icon from "../componets/icon";
import Film from "../assets/film.svg?react";
import Star from "../assets/star.svg?react";
import CardSocialProof from "../componets/cardSocialProof";

interface SocialProofSectionProps extends React.ComponentProps<"section"> {
	className?: string;
}

export default function SocialProofSection({
	className,
	...props
}: SocialProofSectionProps) {
	return (
		<section className="py-24 bg-gray-500" {...props}>
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Text
						as="span"
						variant="light-raleway-sm"
						className="text-yellow tracking-[0.3em] uppercase mb-4"
					>
						Prova Social
					</Text>
					<Text as="h2" variant="title-3xl" className="text-gray-200 mb-4">
						O que nossos clientes{" "}
						<Text
							as="strong"
							variant="title-3xl"
							className="text-gradient-gold"
						>
							dizem
						</Text>{" "}
					</Text>
				</div>
				<div className="flex justify-center gap-12 mb-16">
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
							<Icon svg={Film} className="fill-gray-500 stroke-yellow" />
							<Text
								as="span"
								variant="text-playfair-3xl"
								className="text-yellow"
							>
								+150
							</Text>
						</div>
						<Text
							as="span"
							variant="light-raleway-sm"
							className="text-gray-300"
						>
							Eventos realizados
						</Text>
					</div>
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-1">
							<Icon svg={Star} className="stroke-yellow fill-gray-500" />
							<Text
								as="span"
								variant="text-playfair-3xl"
								className="text-yellow"
							>
								5.0
							</Text>
						</div>
						<Text
							as="span"
							variant="light-raleway-sm"
							className="text-gray-300"
						>
							Avaliação média
						</Text>
					</div>
				</div>
				<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					<CardSocialProof name="Mariana & Rafael" service="Casamento">
						"Superaram todas as expectativas. O cuidado e a qualidade são
						impressionantes."
					</CardSocialProof>
					<CardSocialProof name="Diretor de Marketing" service="Corporativo">
						"Nosso vídeo corporativo elevou a imagem da empresa.
						Profissionalismo impecável."
					</CardSocialProof>
					<CardSocialProof name="Juliana & Pedro" service="Casamento">
						"A sensibilidade para captar os momentos mais especiais é
						incomparável."
					</CardSocialProof>
				</div>
			</div>
		</section>
	);
}
