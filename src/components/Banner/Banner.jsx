import React from 'react';
import Button from '../Button/Button';
import { FiArrowRight } from 'react-icons/fi';
import { BannerContainer, BannerImage, BannerCaption, BannerTitle, BannerDescription } from './Banner.elements';

const Banner = ({ bg }) => {
	return (
		<BannerContainer>
			<BannerImage bg={bg}>
				<div className="container">
					<BannerCaption>
						<BannerTitle>
							<b>Transformasi</b> Digital
						</BannerTitle>
						<BannerDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis eu
							malesuada sagittis, velit. Tincidunt phasellus rhoncus lectus pharetra, urna felis dis.
							Pellentesque tempus quis interdum dolor viverra sit faucibus diam. Euismod risus elit libero
							malesuada purus, turpis cursus.
						</BannerDescription>
						<Button text="Konsultasikan Bisnismu" size="big" icon_after={<FiArrowRight />} />
					</BannerCaption>
				</div>
			</BannerImage>
		</BannerContainer>
	);
};

export default Banner;
