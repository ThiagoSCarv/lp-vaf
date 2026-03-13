import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariant = cva("font-sans", {
	variants: {
		variant: {
			"title-4xl": "font-playfair text-4xl lg:text-5xl font-bold leading-tight",
			"title-3xl": "font-playfair font-bold text-3xl lg:text-5xl",
			"title-2xl": "font-playfair font-semibold text-2xl",
			"text-playfair-lg": "font-playfair font-semibold text-lg",
			"text-playfair-3xl": "font-playfair font-bold text-3xl",
			"bold-raleway-sm": "font-raleway font-bold text-sm",
			"bold-raleway-base": "font-raleway font-bold text-sm lg:text-base",
			"light-raleway-lg": "font-raleway text-lg lg:text-xl font-light",
			"semibold-raleway-sm": "font-raleway text-sm font-semibold",
			"light-raleway-xs": "font-raleway text-xs font-light",
			"light-raleway-sm": "font-raleway text-sm leading-tight",
		},
	},
	defaultVariants: {
		variant: "bold-raleway-sm",
	},
});

interface TextProps extends VariantProps<typeof textVariant> {
	as?: keyof React.JSX.IntrinsicElements;
	className: string;
	children: React.ReactNode;
}

export function Text({
	as = "span",
	variant,
	className,
	children,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariant({ variant, className }),
			props,
		},
		children,
	);
}
