import { useInView } from '@/hooks/useInView';

const SERVICES = [
	{
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
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		),
		title: 'Doorstep Pickup',
		desc: 'We come to you. Schedule a pickup from your home, office, or warehouse — anywhere in Lagos.',
		tag: 'Most Popular',
	},
	{
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
		title: 'Interstate Delivery',
		desc: 'Next-day and 48-hour delivery across all 36 states of Nigeria. Tracked, insured, guaranteed.',
		tag: '',
	},
	{
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
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		title: 'International Shipping',
		desc: 'Cargo and freight shipping worldwide — air and sea. Full customs documentation support.',
		tag: 'International',
	},
	{
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
					d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
				/>
			</svg>
		),
		title: 'Cargo & Freight',
		desc: 'Bulk cargo, commercial freight, and large-volume shipments handled with care and full tracking.',
		tag: '',
	},
	{
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
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		title: 'Express Delivery',
		desc: 'Same-day and next-day express runs within Lagos. When time is critical, we deliver on time.',
		tag: 'Fast Track',
	},
	{
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
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
				/>
			</svg>
		),
		title: 'Real-Time Tracking',
		desc: 'Track every shipment end-to-end. Get live updates via SMS, WhatsApp, and our tracking portal.',
		tag: '',
	},
];

export default function Services() {
	const { ref, inView } = useInView();

	return (
		<section id="services" className="py-24 bg-[#f8f7f5]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div
					ref={ref}
					className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="flex items-center gap-3 mb-4">
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
						<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
							What We Offer
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060d1a] leading-tight mb-4">
						One Platform.
						<br />
						<span className="text-[#f97316]">Every Delivery.</span>
					</h2>
					<p className="text-gray-500 text-lg max-w-xl leading-relaxed">
						From single packages to full freight loads — DSL handles it all with
						speed, care, and end-to-end visibility.
					</p>
				</div>

				{/* Cards grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{SERVICES.map(({ icon, title, desc, tag }, i) => (
						<div
							key={title}
							className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#f97316]/30 hover:shadow-2xl hover:shadow-[#f97316]/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default ${
								inView
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${i * 90 + 200}ms` }}
						>
							{/* Top gradient bar on hover */}
							<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							{tag && (
								<span className="absolute top-4 right-4 bg-[#f97316]/10 text-[#f97316] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
									{tag}
								</span>
							)}

							<div className="w-12 h-12 rounded-xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center mb-5 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300 group-hover:scale-110">
								{icon}
							</div>

							<h3 className="font-black text-[#060d1a] text-lg mb-2">
								{title}
							</h3>
							<p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

							<div className="mt-5 flex items-center gap-1.5 text-[#f97316] text-sm font-black opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
								Learn more
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
