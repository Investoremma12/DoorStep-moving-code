import { useInView } from '@/hooks/useInView';

const REVIEWS = [
	{
		name: 'Chukwuemeka Obi',
		role: 'Business Owner, Lagos',
		initials: 'CO',
		text: 'Their services are awesome. Nice job! DSL picked up my packages from Victoria Island and delivered to Abuja the next day. I was genuinely impressed.',
		stars: 5,
		source: 'Google',
	},
	{
		name: 'Adaora Nwosu',
		role: 'E-commerce Seller, Lekki',
		initials: 'AN',
		text: 'Very fast and reliable services. I use DSL for all my customer deliveries now. The tracking updates keep both me and my customers calm.',
		stars: 5,
		source: 'Google',
	},
	{
		name: 'Bello Musa',
		role: 'Import/Export Trader',
		initials: 'BM',
		text: 'I ship internationally with DSL regularly. Their customs documentation support has saved me so much stress. Professional team, honest pricing.',
		stars: 5,
		source: 'Instagram',
	},
	{
		name: 'Funke Adeyemi',
		role: 'HR Manager, Ikeja',
		initials: 'FA',
		text: "We switched our company's logistics to DSL six months ago. Zero lost packages, always on time, and the customer service team responds within minutes.",
		stars: 5,
		source: 'LinkedIn',
	},
];

function Stars({ count }: { count: number }) {
	return (
		<div className="flex gap-0.5">
			{[...Array(5)].map((_, i) => (
				<svg
					key={i}
					className={`w-4 h-4 ${i < count ? 'fill-amber-400' : 'fill-gray-200'}`}
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
}

const AVATAR_COLORS = ['#f97316', '#ea580c', '#fb923c', '#f97316'];

export default function Testimonials() {
	const { ref, inView } = useInView();

	return (
		<section id="testimonials" className="py-24 bg-[#060d1a]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div
					ref={ref}
					className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
						<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
							Reviews
						</span>
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
						What Our Customers
						<span className="text-[#f97316] block">Are Saying.</span>
					</h2>
					<p className="text-white/50 text-lg">
						4.8 stars on Google. Thousands of packages delivered. Here's what
						real customers say.
					</p>
				</div>

				{/* Review cards */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{REVIEWS.map(({ name, role, initials, text, stars, source }, i) => (
						<div
							key={name}
							className={`flex flex-col p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/8 hover:border-[#f97316]/30 hover:-translate-y-1 transition-all duration-300 ${
								inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
							style={{ transitionDelay: `${i * 100}ms` }}
						>
							<div className="flex items-center justify-between mb-4">
								<Stars count={stars} />
								<span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
									{source}
								</span>
							</div>
							<p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
								"{text}"
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-white/10">
								<div
									className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0"
									style={{
										backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
									}}
								>
									{initials}
								</div>
								<div>
									<p className="text-white font-black text-sm">{name}</p>
									<p className="text-white/40 text-xs">{role}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Google rating bar */}
				<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-lg mx-auto">
					<div className="text-center">
						<p className="text-5xl font-black text-white">4.8</p>
						<div className="flex gap-0.5 justify-center my-1.5">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className="w-4 h-4 fill-amber-400"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<p className="text-white/40 text-xs">4 Google Reviews</p>
					</div>
					<div className="w-px h-12 bg-white/10 hidden sm:block" />
					<div>
						<p className="text-white font-black">DoorStep Logistics (DSL)</p>
						<p className="text-white/50 text-sm mb-3">
							Logistics Service · Jibowu, Lagos
						</p>
						<a
							href="https://maps.google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-[#f97316] hover:text-[#fb923c] text-sm font-black transition-colors"
						>
							Rate us on Google
							<svg
								className="w-3.5 h-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2.5}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
