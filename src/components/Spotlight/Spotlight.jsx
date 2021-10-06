import React from 'react';
import Button from '../Button/Button';
import { SpotlightContainer, Row, Column, ImageHolder, Image, SmallText, Name, Desciption, Location } from './Spotlight.elements';
import ImageSpotlight from '../../images/foto-ukm.jpeg';
import { FiMapPin } from 'react-icons/fi';

const Spotlight = () => {
	return (
		<SpotlightContainer>
			<div className="container">
				<Row>
					<Column width="45">
                        <ImageHolder>
                            <Image src={ImageSpotlight} />
                        </ImageHolder>
					</Column>
					<Column width="55">
						<SmallText>UKM Go Digital</SmallText>
						<Name>Warung Mbah Sambat</Name>
						<Desciption>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis lacinia dolor, quis eu
							malesuada sagittis, velit. Tincidunt phasellus rhoncus lectus pharetra, urna felis dis.
							Pellentesque tempus quis interdum dolor viverra sit faucibus diam. Euismod risus elit libero
							malesuada purus, turpis cursus.{' '}
						</Desciption>
						<Location>
							<FiMapPin /> Sleman, Yogyakarta
						</Location>
						<Button to="/" text="Selengkapnya" size="big" />
					</Column>
				</Row>
			</div>
		</SpotlightContainer>
	);
};

export default Spotlight;
