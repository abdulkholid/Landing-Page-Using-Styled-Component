import React from 'react';
import { Outer, Reviews, ReviewItem, Title, PersonName, Photo, Name, Content } from './CustomerReview.elements';
import ReviewerPhoto from '../../images/reviewer-photo.png';
import UpperFooter from '../UpperFooter/UpperFooter';

const CustomerReview = () => {
	return (
		<>
			<Outer>
				<div className="container">
					<Title>Client Reviews</Title>
					<Reviews>
						<ReviewItem>
							<PersonName>
								<Photo src={ReviewerPhoto} />
								<Name>Abdul Kholid <small>Technical Adviser Terikad.id</small></Name>
							</PersonName>
							<Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu id ac elit pretium feugiat scelerisque blandit at. Integer tempus leo vitae ac tristique. </Content>
						</ReviewItem>
					</Reviews>
				</div>
			</Outer>
			<UpperFooter />
		</>
	);
};

export default CustomerReview;
