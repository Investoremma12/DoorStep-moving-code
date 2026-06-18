import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Coverage from '@/components/sections/Coverage';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function App() {
	return (
		<div className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
			<Navbar />
			<Hero />
			<StatsStrip />
			<Services />
			<HowItWorks />
			<Coverage />
			<About />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}
