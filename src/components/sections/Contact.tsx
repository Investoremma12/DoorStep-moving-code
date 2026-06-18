import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const INFO = [
	{
		label: 'Head Office',
		value: '22 Ikorodu Rd, Jibowu, Lagos 100252',
		href: 'https://maps.google.com/?q=22+Ikorodu+Rd+Jibowu+Lagos',
		icon: (
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
		),
	},
	{
		label: 'Phone / WhatsApp',
		value: '0802 802 4517 · +234 704 700 0500',
		href: 'tel:08028024517',
		icon: (
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
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
				/>
			</svg>
		),
	},
	{
		label: 'Opening Hours',
		value: 'Open Daily · Closes 5:00 PM',
		href: null,
		icon: (
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
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		label: 'Instagram',
		value: '@doorstep_ng · 4.2K+ Followers',
		href: 'https://instagram.com/doorstep_ng',
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
	},
];

type FormData = {
	name: string;
	phone: string;
	service: string;
	from: string;
	to: string;
	message: string;
};
const EMPTY: FormData = {
	name: '',
	phone: '',
	service: '',
	from: '',
	to: '',
	message: '',
};

export default function Contact() {
	const { ref, inView } = useInView();
	const [form, setForm] = useState<FormData>(EMPTY);
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const handle = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSent(true);
			setForm(EMPTY);
			setTimeout(() => setSent(false), 6000);
		}, 1200);
	};

	const inputCls =
		'w-full bg-[#f8f7f5] border border-gray-200 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/10 text-[#060d1a] placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200';

	return (
		<section id="contact" className="py-24 bg-[#f8f7f5]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div
					ref={ref}
					className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
						<span className="text-[#f97316] text-xs font-black uppercase tracking-[5px]">
							Get In Touch
						</span>
						<div className="w-8 h-[3px] bg-[#f97316] rounded-full" />
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-[#060d1a] leading-tight mb-4">
						Ship Something
						<span className="text-[#f97316] block">Today.</span>
					</h2>
					<p className="text-gray-500 text-lg">
						Call us, WhatsApp us, or fill the form below. We'll have your
						package moving within the hour.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-10">
					{/* Left — info + WhatsApp */}
					<div className="flex flex-col gap-4">
						{INFO.map(({ label, value, href, icon }) => (
							<div
								key={label}
								className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:border-[#f97316]/30 rounded-2xl transition-all duration-200 group hover:shadow-md"
							>
								<div className="w-10 h-10 rounded-xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-200">
									{icon}
								</div>
								<div>
									<p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
										{label}
									</p>
									{href ? (
										<a
											href={href}
											target={href.startsWith('http') ? '_blank' : undefined}
											rel="noopener noreferrer"
											className="text-[#060d1a] font-semibold text-sm hover:text-[#f97316] transition-colors"
										>
											{value}
										</a>
									) : (
										<p className="text-[#060d1a] font-semibold text-sm">
											{value}
										</p>
									)}
								</div>
							</div>
						))}

						<a
							href="https://wa.me/2347047000500"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 mt-1"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.505 5.843L0 24l6.337-1.478A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
							</svg>
							Chat on WhatsApp
						</a>
					</div>

					{/* Right — form */}
					<div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
						<h3 className="text-xl font-black text-[#060d1a] mb-1">
							Book a Shipment
						</h3>
						<p className="text-gray-400 text-sm mb-6">
							We'll call you back within 30 minutes.
						</p>

						{sent ? (
							<div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
								<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
									<svg
										className="w-8 h-8 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2.5}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<div>
									<p className="font-black text-[#060d1a] text-lg">
										Booking Received!
									</p>
									<p className="text-gray-400 text-sm mt-1">
										We'll call you back within 30 minutes.
									</p>
								</div>
							</div>
						) : (
							<form onSubmit={submit} className="flex flex-col gap-4">
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
											Full Name
										</label>
										<input
											name="name"
											type="text"
											required
											value={form.name}
											onChange={handle}
											placeholder="Your name"
											className={inputCls}
										/>
									</div>
									<div>
										<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
											Phone Number
										</label>
										<input
											name="phone"
											type="tel"
											required
											value={form.phone}
											onChange={handle}
											placeholder="0801 234 5678"
											className={inputCls}
										/>
									</div>
								</div>
								<div>
									<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
										Service Type
									</label>
									<select
										name="service"
										required
										value={form.service}
										onChange={handle}
										className={inputCls}
									>
										<option value="">Select a service...</option>
										<option>Doorstep Pickup (Lagos)</option>
										<option>Interstate Delivery</option>
										<option>International Shipping</option>
										<option>Express / Same-Day Delivery</option>
										<option>Cargo & Freight</option>
									</select>
								</div>
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
											Pickup Location
										</label>
										<input
											name="from"
											type="text"
											value={form.from}
											onChange={handle}
											placeholder="e.g. Lekki Phase 1"
											className={inputCls}
										/>
									</div>
									<div>
										<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
											Delivery Destination
										</label>
										<input
											name="to"
											type="text"
											value={form.to}
											onChange={handle}
											placeholder="e.g. Abuja"
											className={inputCls}
										/>
									</div>
								</div>
								<div>
									<label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">
										Package Details
									</label>
									<textarea
										name="message"
										rows={3}
										value={form.message}
										onChange={handle}
										placeholder="Describe your package — size, weight, contents, special handling..."
										className={`${inputCls} resize-none`}
									/>
								</div>
								<button
									type="submit"
									disabled={loading}
									className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] disabled:opacity-70 text-white font-black py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#f97316]/20"
								>
									{loading ? (
										<>
											<svg
												className="w-4 h-4 animate-spin"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
												/>
											</svg>
											Processing...
										</>
									) : (
										<>
											Book My Shipment
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
										</>
									)}
								</button>
								<p className="text-center text-xs text-gray-400">
									Or call directly:{' '}
									<a
										href="tel:08028024517"
										className="text-[#f97316] font-black hover:underline"
									>
										0802 802 4517
									</a>
								</p>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
