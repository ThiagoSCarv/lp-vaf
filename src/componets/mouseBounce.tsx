interface MouseBounceProps {
	className?: string;
}
export default function MouseBounce({ ...props }: MouseBounceProps) {
	return (
		<div className="absolute bottom-8 left-1/2 translate-x-1/2" {...props}>
			<div className="w-6 animate-bounce h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
				<div className="w-1 h-2 bg-yellow rounded-full"></div>
			</div>
		</div>
	);
}
