import { useInView } from '@/hooks/useInView';

const STEPS = [
	{
		step: '01',
		title: 'Book a Pickup',
		desc: 'Call us, send a WhatsApp message, or fill the contact form. Tell us your pickup location, destination, and package details.',
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
				/>
			</svg>
		),
	},
	{
		step: '02',
		title: 'We Pick It Up',
		desc: 'Our driver arrives at your doorstep at the scheduled time. Your package is logged, tagged, and secured for transit.',
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	},
	{
		step: '03',
		title: 'Track in Real Time',
		desc: 'Get live SMS and WhatsApp updates as your package moves. View real-time status through our tracking system.',
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
				/>
			</svg>
		),
	},
	{
		step: '04',
		title: 'Delivered to the Door',
		desc: 'Your recipient gets the package delivered right to their doorstep — with a delivery confirmation and signature.',
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
];

export default function HowItWorks() {
	const { ref, inView } = useInView();

	return (
		<section id="how-it-works" className="py-24 bg-[#060d1a] overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div
					ref={ref}
					className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
						<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
							The Process
						</span>
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
						How DSL Works
					</h2>
					<p className="text-white/50 text-lg leading-relaxed">
						Four simple steps from booking to delivery — no stress, no
						guesswork, just results.
					</p>
				</div>

				{/* Steps */}
				<div className="relative">
					{/* Connecting line — desktop */}
					<div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent z-0" />

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
						{STEPS.map(({ step, title, desc, icon }, i) => (
							<div
								key={step}
								className={`flex flex-col items-center text-center transition-all duration-500 ${
									inView
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-10'
								}`}
								style={{ transitionDelay: `${i * 130 + 300}ms` }}
							>
								{/* Step circle */}
								<div className="relative mb-6">
									<div className="w-16 h-16 rounded-2xl bg-[#f97316] flex items-center justify-center text-white shadow-xl shadow-[#f97316]/25">
										{icon}
									</div>
									<div className="absolute -top-2 -right-2 w-6 h-6 bg-[#060d1a] border-2 border-[#f97316] rounded-full flex items-center justify-center">
										<span className="text-[#f97316] text-[9px] font-black">
											{step}
										</span>
									</div>
								</div>

								<h3 className="font-black text-white text-lg mb-3">{title}</h3>
								<p className="text-white/50 text-sm leading-relaxed">{desc}</p>
							</div>
						))}
					</div>
				</div>

				{/* CTA bar */}
				<div className="mt-16 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
					<div>
						<p className="text-white font-black text-xl mb-1">
							Ready to ship your first package?
						</p>
						<p className="text-white/80 text-sm">
							Call us or send a WhatsApp. We'll have it moving in minutes.
						</p>
					</div>
					<div className="flex gap-3 flex-shrink-0">
						<a
							href="tel:+2347047000500"
							className="flex items-center gap-2 bg-white text-[#f97316] font-black px-6 py-3 rounded-xl text-sm hover:bg-orange-50 transition-colors shadow-lg"
						>
							Call Now
						</a>
						<a
							href="https://wa.me/2347047000500"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black px-6 py-3 rounded-xl text-sm transition-colors"
						>
							WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
