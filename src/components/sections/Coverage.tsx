import { useInView } from '@/hooks/useInView';

const HUBS = [
	{
		city: 'Lagos (HQ)',
		address: '22 Ikorodu Rd, Jibowu, Lagos',
		address2: '17A John-Vic Igboanugo St, Lekki Phase 1',
		type: 'Head Office',
		color: '#f97316',
	},
	{
		city: 'Lagos — Lekki',
		address: '17A, John-Vic Igboanugo Street',
		address2: 'Off Chris Madueke Drive, Lekki Phase 1',
		type: 'Branch Office',
		color: '#fb923c',
	},
	{
		city: 'Interstate — Nationwide',
		address: 'All 36 States Covered',
		address2: 'Partner network across Nigeria',
		type: 'Delivery Network',
		color: '#fdba74',
	},
	{
		city: 'International',
		address: 'Air & Sea Freight Worldwide',
		address2: 'Customs documentation support',
		type: 'Global Shipping',
		color: '#f97316',
	},
];

const COVERAGE_TYPES = [
	{ label: 'Same-Day Delivery', area: 'Lagos Mainland & Island', icon: '⚡' },
	{ label: 'Next-Day Delivery', area: 'Lagos + Ogun + Oyo', icon: '🚚' },
	{ label: '48-Hour Delivery', area: 'All Nigerian States', icon: '📦' },
	{
		label: 'International Freight',
		area: 'Africa, Europe, Americas, Asia',
		icon: '✈️',
	},
];

export default function Coverage() {
	const { ref, inView } = useInView();
	const { ref: ref2, inView: inView2 } = useInView();

	return (
		<section id="coverage" className="py-24 bg-[#f8f7f5]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div
					ref={ref}
					className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="flex items-center gap-3 mb-4">
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
						<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
							Coverage
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060d1a] leading-tight mb-4">
						We Go Where
						<br />
						<span className="text-[#f97316]">You Need Us.</span>
					</h2>
					<p className="text-gray-500 text-lg max-w-xl leading-relaxed">
						From Ikorodu to international destinations — DSL has the reach, the
						network, and the expertise to get your package there.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-10 items-start">
					{/* Left — map visual */}
					<div
						className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
					>
						<div className="relative bg-[#060d1a] rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
							{/* Nigeria SVG map placeholder with animated dots */}
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Simplified Nigeria outline using SVG paths */}
								<svg
									viewBox="0 0 400 300"
									className="w-full h-full opacity-20"
									fill="none"
								>
									<path
										d="M80 80 L120 60 L180 55 L240 65 L300 70 L340 90 L350 130 L340 170 L320 200 L290 220 L250 230 L210 240 L170 235 L130 220 L100 200 L80 175 L70 145 L75 110 Z"
										stroke="#f97316"
										strokeWidth="2"
										fill="#f97316"
										fillOpacity="0.05"
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center text-white/20">
									<div className="text-center">
										<p className="text-6xl font-black">🗺️</p>
										<p className="text-sm font-bold mt-2">Nigeria & Beyond</p>
									</div>
								</div>
							</div>

							{/* Animated pulse dots for key cities */}
							{[
								{ top: '55%', left: '30%', label: 'Lagos' },
								{ top: '35%', left: '50%', label: 'Abuja' },
								{ top: '30%', left: '65%', label: 'Kano' },
								{ top: '60%', left: '65%', label: 'Port Harcourt' },
							].map(({ top, left, label }, i) => (
								<div key={label} className="absolute" style={{ top, left }}>
									<div className="relative flex items-center justify-center">
										<div
											className="w-3 h-3 bg-[#f97316] rounded-full shadow-lg shadow-[#f97316]/50 z-10"
											style={{
												animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
												animationDelay: `${i * 400}ms`,
											}}
										/>
										<div className="absolute w-3 h-3 bg-[#f97316] rounded-full" />
										<span className="absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold whitespace-nowrap">
											{label}
										</span>
									</div>
								</div>
							))}

							{/* Coverage type pills */}
							<div className="absolute bottom-4 left-4 right-4">
								<div className="grid grid-cols-2 gap-2">
									{COVERAGE_TYPES.map(({ label, area, icon }) => (
										<div
											key={label}
											className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-2.5"
										>
											<div className="flex items-center gap-1.5 mb-0.5">
												<span className="text-base">{icon}</span>
												<span className="text-white font-bold text-xs">
													{label}
												</span>
											</div>
											<p className="text-white/40 text-[10px] pl-6">{area}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right — hub cards */}
					<div
						ref={ref2}
						className={`flex flex-col gap-4 transition-all duration-700 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
					>
						{HUBS.map(({ city, address, address2, type, color }, i) => (
							<div
								key={city}
								className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all duration-300 group"
								style={{ transitionDelay: `${i * 80}ms` }}
							>
								<div
									className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
									style={{ backgroundColor: `${color}15`, color }}
								>
									<svg
										className="w-5 h-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
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
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between mb-1">
										<p className="font-black text-[#060d1a] text-base">
											{city}
										</p>
										<span
											className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
											style={{ backgroundColor: `${color}15`, color }}
										>
											{type}
										</span>
									</div>
									<p className="text-gray-500 text-sm">{address}</p>
									<p className="text-gray-400 text-xs mt-0.5">{address2}</p>
								</div>
							</div>
						))}

						{/* Phone CTA */}
						<a
							href="tel:08028024517"
							className="flex items-center justify-center gap-3 bg-[#060d1a] hover:bg-[#0a1628] text-white font-black py-4 rounded-2xl transition-colors group mt-2"
						>
							<svg
								className="w-5 h-5 text-[#f97316]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
								/>
							</svg>
							Call for Coverage Questions
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
