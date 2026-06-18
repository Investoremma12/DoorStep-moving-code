import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
import { SplineScene } from '@/components/ui/spline-scene';

const TAGLINES = [
	{ top: 'Fast. Reliable.', bottom: 'Right to Your Door.' },
	{ top: 'Lagos to the', bottom: 'World & Back.' },
	{ top: 'Cargo. Freight.', bottom: 'Delivered Daily.' },
];

const BADGES = [
	{ val: '4.8★', label: 'Google Rating' },
	{ val: '4.2K+', label: 'Instagram Followers' },
	{ val: '24/7', label: 'Support Available' },
	{ val: 'Interstate', label: '& International' },
];

export default function Hero() {
	const [idx, setIdx] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const t = setInterval(() => {
			setVisible(false);
			setTimeout(() => {
				setIdx((i) => (i + 1) % TAGLINES.length);
				setVisible(true);
			}, 400);
		}, 4500);
		return () => clearInterval(t);
	}, []);

	const go = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

	return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060d1a] pt-20"
		>
			{/* Animated gradient background */}
			<div className="absolute inset-0">
				<div
					className="absolute inset-0 opacity-30"
					style={{
						background:
							'radial-gradient(ellipse 80% 60% at 50% -10%, #f97316 0%, transparent 60%)',
					}}
				/>
				<div
					className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
					style={{
						background: 'linear-gradient(to top, #0a1628, transparent)',
					}}
				/>
				{/* Grid lines */}
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage: `
              linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)
            `,
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			{/* Main Spline Hero Card */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
				<Card className="w-full min-h-[560px] lg:h-[580px] bg-black/60 border border-white/10 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/50">
					<Spotlight
						className="-top-40 left-0 md:left-60 md:-top-20"
						fill="rgba(249,115,22,0.6)"
					/>

					<div className="flex flex-col lg:flex-row h-full min-h-[560px]">
						{/* Left — text content */}
						<div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
							{/* Eyebrow */}
							<div className="flex items-center gap-3 mb-6">
								<div className="flex gap-1">
									<span
										className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce"
										style={{ animationDelay: '0ms' }}
									/>
									<span
										className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce"
										style={{ animationDelay: '150ms' }}
									/>
									<span
										className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce"
										style={{ animationDelay: '300ms' }}
									/>
								</div>
								<span className="text-[#f97316] text-xs font-black uppercase tracking-[4px]">
									Lagos · Nigeria · Worldwide
								</span>
							</div>

							{/* Animated headline */}
							<div className="mb-6 min-h-[120px] sm:min-h-[140px]">
								<h1
									className={`font-black leading-[0.95] tracking-tight transition-all duration-400 ${
										visible
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-5'
									}`}
								>
									<span className="block text-4xl sm:text-5xl xl:text-6xl text-white">
										{TAGLINES[idx].top}
									</span>
									<span className="block text-4xl sm:text-5xl xl:text-6xl bg-gradient-to-r from-[#f97316] to-[#fb923c] bg-clip-text text-transparent">
										{TAGLINES[idx].bottom}
									</span>
								</h1>
							</div>

							<p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
								DoorStep Logistics (DSL) delivers fast, reliable cargo & freight
								services across Lagos, interstate Nigeria, and internationally.
								We bring it to your door — seamlessly.
							</p>

							{/* CTAs */}
							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href="tel:+2347047000500"
									className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-black px-7 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-xl shadow-[#f97316]/25 hover:-translate-y-0.5"
								>
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
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
										/>
									</svg>
									Get a Free Quote
								</a>
								<button
									onClick={() => go('services')}
									className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#f97316]/50 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
								>
									Explore Services
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							</div>

							{/* Badge strip */}
							<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
								{BADGES.map(({ val, label }) => (
									<div
										key={label}
										className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-center"
									>
										<p className="text-[#f97316] font-black text-sm leading-none">
											{val}
										</p>
										<p className="text-white/40 text-[10px] mt-1 leading-tight">
											{label}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Right — Spline 3D scene */}
						<div className="flex-1 relative min-h-[280px] lg:min-h-full">
							{/* Orange glow behind 3D */}
							<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
								<div className="w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl" />
							</div>
							<SplineScene
								scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
								className="w-full h-full"
							/>
						</div>
					</div>
				</Card>
			</div>

			{/* Scroll indicator */}
			<div className="relative z-10 flex justify-center pb-6 animate-bounce">
				<div className="flex flex-col items-center gap-1.5">
					<div className="w-0.5 h-8 bg-gradient-to-b from-[#f97316]/50 to-transparent rounded-full" />
					<svg
						className="w-4 h-4 text-[#f97316]/50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
