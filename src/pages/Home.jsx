import { Banner, FactList } from '../components';
import Spotlight from '../components/Spotlight/Spotlight';
import BgBanner from '../images/banner.jpeg';
import Gov_40 from '../images/gov_40.jpeg';
import PartnerLogo from '../components/PartnerLogo/PartnerLogo';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import Footer from '../components/Footer/Footer';

const Home = () => {
	const factLists = [
		{
			id: 1,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		},
		{
			id: 2,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		},
		{
			id: 3,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		},
		{
			id: 4,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		},
		{
			id: 5,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		},
		{
			id: 6,
			title: 'Maxime Repellendus Enim Amet',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error vero provident ipsam maxime, aspernatur cupiditate eveniet veniam itaque ullam unde fuga sequi ab iusto adipisci quaerat corrupti. Laudantium, nihil.'
		}
	];

	const gov_4_0 = [
		{
			id: 1,
			title: 'Trip Planner',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis',
			image: Gov_40
		},
		{
			id: 2,
			title: 'Trip Planner',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis',
			image: Gov_40
		},
		{
			id: 3,
			title: 'Trip Planner',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis',
			image: Gov_40
		}
	];

	return (
		<div id="home">
			<Banner bg={BgBanner} />
			<FactList
				title="Perubahan Apa yang Terjadi?"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis eu malesuada sagittis, velit. Tincidunt phasellus rhoncus lectus pharetra, urna felis dis. Pellentesque tempus quis interdum dolor viverra sit faucibus diam. Euismod risus elit libero malesuada purus, turpis cursus."
				facts={factLists}
			/>
			<Spotlight />
			<FactList
				title="Government 4.0"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis eu malesuada sagittis, velit. Tincidunt phasellus rhoncus lectus pharetra, urna felis dis. Pellentesque tempus quis interdum dolor viverra sit faucibus diam. Euismod risus elit libero malesuada purus, turpis cursus."
				facts={gov_4_0}
			/>
			<PartnerLogo />
			<CustomerReview />
			<Footer></Footer>
		</div>
	);
};

export default Home;
