import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';

const STATS = [
	{
		target: 5000,
		suffix: '+',
		label: 'Deliveries Completed',
		sub: 'Across Nigeria & beyond',
	},
	{
		target: 48,
		suffix: 'hrs',
		label: 'Max Transit Time',
		sub: 'Interstate deliveries',
	},
	{
		target: 98,
		suffix: '%',
		label: 'On-Time Rate',
		sub: 'Verified by customers',
	},
	{
		target: 36,
		suffix: '+',
		label: 'States Covered',
		sub: 'Nigeria-wide network',
	},
];

function StatCard({
	target,
	suffix,
	label,
	sub,
	start,
}: (typeof STATS)[0] & { start: boolean }) {
	const count = useCounter(target, 1800, start);
	return (
		<div className="flex flex-col items-center justify-center py-10 px-4 text-center border-r border-white/5 last:border-r-0">
			<p className="font-black text-5xl sm:text-6xl text-white tabular-nums mb-1 leading-none">
				{count}
				<span className="text-[#f97316]">{suffix}</span>
			</p>
			<p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-1">
				{label}
			</p>
			<p className="text-white/30 text-xs">{sub}</p>
		</div>
	);
}

export default function StatsStrip() {
	const { ref, inView } = useInView(0.2);

	return (
		<div ref={ref} className="bg-[#0a1628] border-y border-white/5">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-2 lg:grid-cols-4">
					{STATS.map((stat) => (
						<StatCard key={stat.label} {...stat} start={inView} />
					))}
				</div>
			</div>
		</div>
	);
}
