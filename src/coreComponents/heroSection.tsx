import type React from "react";
import { Text } from "../componets/text";
import Button from "../componets/button";
import HeroBg from "../assets/hero-bg.jpg";
import MouseBounce from "../componets/mouseBounce";

interface HeroSectionProps extends React.ComponentProps<"section"> {
	className?: string;
}

export default function HeroSection({ className, ...props }: HeroSectionProps) {
	return (
		<section
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			{...props}
		>
			<div className="absolute inset-0">
				<img
					src={HeroBg}
					alt="Cinematografia profissional"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 overlay-dark"></div>
			</div>
			<div className="flex flex-col justify-center items-center relative z-10 container mx-auto px-6 text-center max-w-4xl">
				<Text
					as="span"
					variant="light-raleway-sm"
					className="text-yellow mb-6 tracking-[0.3em]"
				>
					VICTOR & ANA FILMES
				</Text>
				<Text as="h1" variant="title-4xl" className="text-gray-100 mb-6">
					Filmes cinematográficos que{" "}
					<Text as="strong" variant="title-4xl" className="text-gradient-gold">
						eternizam histórias
					</Text>{" "}
					e fortalecem marcas.
				</Text>
				<Text as="p" variant="light-raleway-lg" className="text-gray-300 mb-10">
					Casamentos emocionantes e produções corporeativas modernas, com
					qualidade, cuidado e experiência personalizada.
				</Text>
				<div className="max-w-110">
					<Button href="https://wa.me/+5561993413543">
						SOLICITAR ORÇAMENTO NO WHATSAPP
					</Button>
				</div>
			</div>
			<MouseBounce />
		</section>
	);
}
