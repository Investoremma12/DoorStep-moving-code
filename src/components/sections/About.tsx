import { useInView } from '@/hooks/useInView';

const VALUES = [
	{
		icon: '⚡',
		title: 'Speed',
		desc: 'We obsess over delivery time. Every minute counts in logistics.',
	},
	{
		icon: '🔒',
		title: 'Reliability',
		desc: 'We say what we do and do what we say. 98% on-time rate.',
	},
	{
		icon: '📍',
		title: 'Transparency',
		desc: 'Real-time tracking. No guesswork — ever.',
	},
	{
		icon: '🤝',
		title: 'Customer First',
		desc: 'Every support request is treated with urgency and care.',
	},
];

export default function About() {
	const { ref, inView } = useInView();
	const { ref: ref2, inView: inView2 } = useInView();

	return (
		<section id="about" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main layout */}
				<div
					ref={ref}
					className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					{/* Left — image */}
					<div className="relative">
						<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#060d1a]">
							<img
								src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80"
								alt="DSL logistics team"
								className="w-full h-full object-cover opacity-80"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-[#060d1a]/60 via-transparent to-transparent" />
						</div>

						{/* Floating review card */}
						<div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 p-5 max-w-[200px]">
							<div className="flex gap-0.5 mb-1">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className={`w-3.5 h-3.5 ${i < 5 ? 'fill-amber-400' : 'fill-gray-200'}`}
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<p className="text-[#060d1a] font-black text-lg leading-none">
								4.8
							</p>
							<p className="text-gray-400 text-xs mt-0.5">Google Verified</p>
							<p className="text-gray-500 text-[10px] mt-2 italic">
								"Very fast and reliable services"
							</p>
						</div>

						{/* Orange accent */}
						<div className="absolute -top-4 -left-4 w-14 h-14 bg-[#f97316] rounded-xl shadow-xl shadow-[#f97316]/30 flex items-center justify-center">
							<span className="text-white font-black text-lg">DSL</span>
						</div>
					</div>

					{/* Right — story */}
					<div>
						<div className="flex items-center gap-3 mb-5">
							<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
							<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
								Our Story
							</span>
						</div>
						<h2 className="text-4xl sm:text-5xl font-black text-[#060d1a] leading-tight mb-6">
							Born in Lagos.
							<br />
							<span className="text-[#f97316]">Built for Nigeria.</span>
						</h2>
						<p className="text-gray-600 leading-relaxed mb-5">
							DoorStep Logistics (DSL) was founded with a simple but powerful
							vision: make logistics in Nigeria as seamless and stress-free as
							possible. Based on Ikorodu Road, Jibowu — in the heart of Lagos —
							we understand the unique challenges of Nigerian roads, and we
							built our operations around them.
						</p>
						<p className="text-gray-500 leading-relaxed mb-5">
							Today, DSL serves thousands of individuals, SMEs, and corporate
							clients across Lagos, all 36 states, and internationally. We
							handle everything from a single envelope to full freight
							containers — with the same care and urgency every time.
						</p>
						<p className="text-gray-500 leading-relaxed mb-8">
							With 4.2K+ Instagram followers and a growing LinkedIn presence of
							2.6K+, DSL is becoming the logistics brand Lagos trusts and talks
							about.
						</p>

						{/* Social proof */}
						<div className="grid grid-cols-3 gap-3">
							{[
								{ val: '4.2K+', label: 'Instagram' },
								{ val: '2.6K+', label: 'LinkedIn' },
								{ val: '500+', label: 'Facebook' },
							].map(({ val, label }) => (
								<div
									key={label}
									className="bg-[#f8f7f5] rounded-xl p-4 text-center border border-gray-100"
								>
									<p className="text-[#f97316] font-black text-xl">{val}</p>
									<p className="text-gray-500 text-xs mt-0.5">
										{label} Followers
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Values grid */}
				<div
					ref={ref2}
					className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					{VALUES.map(({ icon, title, desc }, i) => (
						<div
							key={title}
							className="p-6 rounded-2xl bg-[#f8f7f5] border border-gray-100 hover:bg-[#060d1a] group transition-all duration-300 hover:-translate-y-1"
							style={{ transitionDelay: `${i * 80}ms` }}
						>
							<span className="text-2xl block mb-3">{icon}</span>
							<p className="font-black text-[#060d1a] group-hover:text-white text-base mb-2 transition-colors">
								{title}
							</p>
							<p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
