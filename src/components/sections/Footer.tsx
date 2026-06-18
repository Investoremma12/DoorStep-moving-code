const FOOTER_LINKS: Record<
	string,
	{ label: string; id?: string; href?: string }[]
> = {
	Services: [
		{ label: 'Doorstep Pickup', id: 'services' },
		{ label: 'Interstate Delivery', id: 'services' },
		{ label: 'International Shipping', id: 'services' },
		{ label: 'Express Delivery', id: 'services' },
		{ label: 'Cargo & Freight', id: 'services' },
	],
	Company: [
		{ label: 'About DSL', id: 'about' },
		{ label: 'How It Works', id: 'how-it-works' },
		{ label: 'Coverage Areas', id: 'coverage' },
		{ label: 'Customer Reviews', id: 'testimonials' },
	],
	Contact: [
		{ label: '0802 802 4517', href: 'tel:08028024517' },
		{ label: '+234 704 700 0500', href: 'tel:+2347047000500' },
		{ label: 'WhatsApp Us', href: 'https://wa.me/2347047000500' },
		{
			label: '22 Ikorodu Rd, Jibowu',
			href: 'https://maps.google.com/?q=22+Ikorodu+Rd+Jibowu+Lagos',
		},
	],
};

const SOCIALS = [
	{
		label: 'Instagram',
		href: 'https://instagram.com/doorstep_ng',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/company/doorstep-logistics-dsl',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: 'WhatsApp',
		href: 'https://wa.me/2347047000500',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.505 5.843L0 24l6.337-1.478A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
			</svg>
		),
	},
];

export default function Footer() {
	const go = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

	return (
		<footer className="bg-[#030810] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-3 mb-5">
							<div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
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
							<div>
								<p className="font-black text-sm">
									DoorStep <span className="text-[#f97316]">DSL</span>
								</p>
								<p className="text-white/40 text-[9px] font-bold tracking-[3px] uppercase mt-0.5">
									Logistics
								</p>
							</div>
						</div>
						<p className="text-white/40 text-sm leading-relaxed mb-5">
							Fast, reliable, and convenient cargo & freight. Right to your
							doorstep — anywhere in Nigeria and beyond.
						</p>
						<div className="flex gap-2">
							{SOCIALS.map(({ href, label, icon }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#f97316] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
								>
									{icon}
								</a>
							))}
						</div>
					</div>

					{/* Link columns */}
					{Object.entries(FOOTER_LINKS).map(([section, links]) => (
						<div key={section}>
							<h4 className="text-white/30 text-[10px] font-black uppercase tracking-[3px] mb-5">
								{section}
							</h4>
							<ul className="flex flex-col gap-3">
								{links.map(({ label, id, href }) => (
									<li key={label}>
										{id ? (
											<button
												onClick={() => go(id)}
												className="text-white/50 hover:text-[#f97316] text-sm transition-colors text-left"
											>
												{label}
											</button>
										) : (
											<a
												href={href}
												target={href?.startsWith('http') ? '_blank' : undefined}
												rel="noopener noreferrer"
												className="text-white/50 hover:text-[#f97316] text-sm transition-colors"
											>
												{label}
											</a>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="text-white/20 text-xs">
						© {new Date().getFullYear()} DoorStep Logistics (DSL). All rights
						reserved. Lagos, Nigeria.
					</p>
					<p className="text-white/20 text-xs">
						Jibowu · Lekki Phase 1 · All 36 States · International
					</p>
				</div>
			</div>
		</footer>
	);
}
