import type React from "react";
import { Text } from "../componets/text";
import SocialLinks from "../componets/socialLinks";
import Instagram from "../assets/instagram.svg?react";
import Youtube from "../assets/youtube.svg?react";

interface FooterProps extends React.ComponentProps<"footer"> {
	className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
	return (
		<footer className="py-10 bg-gray-500" {...props}>
			<div className="container mx-auto px-6 text-center">
				<Text as="span" variant="text-playfair-lg" className="text-yellow mb-4">
					Victor & Ana Filmes
				</Text>
				<div className="flex justify-center gap-4 mb-4">
					<SocialLinks
						link="https://www.instagram.com/victoreanafilmes?igsh=MW5mdjZ0dmtqbDl2eA=="
						icon={Instagram}
					/>
					<SocialLinks link="" icon={Youtube} />
				</div>
				<Text as="p" variant="light-raleway-xs" className="text-gray-300">
					© 2026 Victor & Ana Filmes. Todos os direitos reservados.
				</Text>
			</div>
		</footer>
	);
}
