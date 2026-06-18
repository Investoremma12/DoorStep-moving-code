import { useState, useEffect } from 'react';

const LINKS = [
	{ label: 'Home', id: 'home' },
	{ label: 'Services', id: 'services' },
	{ label: 'How It Works', id: 'how-it-works' },
	{ label: 'Coverage', id: 'coverage' },
	{ label: 'About', id: 'about' },
	{ label: 'Contact', id: 'contact' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', fn);
		return () => window.removeEventListener('scroll', fn);
	}, []);

	const go = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'bg-[#060d1a]/97 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/5'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<button
						onClick={() => go('home')}
						className="flex items-center gap-3"
					>
						<div className="relative w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center shadow-lg shadow-[#f97316]/30 flex-shrink-0">
							<svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
								<path
									d="M4 10h20l4 6-4 6H4l4-6-4-6z"
									fill="white"
									opacity="0.9"
								/>
								<circle cx="10" cy="26" r="3" fill="white" />
								<circle cx="22" cy="26" r="3" fill="white" />
							</svg>
						</div>
						<div className="leading-none">
							<span className="text-white font-black text-sm tracking-wide">
								DoorStep
							</span>
							<span className="text-[#f97316] font-black text-sm tracking-wide">
								{' '}
								DSL
							</span>
							<p className="text-white/40 text-[9px] font-semibold tracking-[3px] uppercase mt-0.5">
								Logistics
							</p>
						</div>
					</button>

					{/* Desktop nav */}
					<nav className="hidden lg:flex items-center gap-7">
						{LINKS.map(({ label, id }) => (
							<button
								key={id}
								onClick={() => go(id)}
								className="relative text-white/70 hover:text-white text-sm font-semibold transition-colors duration-200 group"
							>
								{label}
								<span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#f97316] rounded-full transition-all duration-300 group-hover:w-full" />
							</button>
						))}
					</nav>

					{/* CTA */}
					<a
						href="tel:08028024517"
						className="hidden lg:inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-black px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-[#f97316]/20 hover:-translate-y-0.5 hover:shadow-[#f97316]/30"
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
						0802 802 4517
					</a>

					{/* Hamburger */}
					<button
						onClick={() => setOpen(!open)}
						className="lg:hidden text-white p-2"
						aria-label="Toggle menu"
					>
						<div className="w-5 flex flex-col gap-1.5">
							<span
								className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
							/>
							<span
								className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}
							/>
							<span
								className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#060d1a]/98 backdrop-blur-md border-t border-white/5 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className="px-4 py-4 flex flex-col gap-1">
					{LINKS.map(({ label, id }) => (
						<button
							key={id}
							onClick={() => go(id)}
							className="text-left text-white/70 hover:text-white hover:bg-white/5 font-semibold text-sm px-4 py-3 rounded-lg transition-all duration-200"
						>
							{label}
						</button>
					))}
					<a
						href="tel:08028024517"
						className="mt-2 flex items-center justify-center gap-2 bg-[#f97316] text-white font-black text-sm py-3 rounded-lg"
					>
						Call Us Now
					</a>
				</div>
			</div>
		</header>
	);
}
