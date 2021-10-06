import { FactContainer, FactTitle, FactDesc, FactRow } from './FactList.elements';
import FactItem from '../FactItem/FactItem';

const FactList = ({ title, description, facts }) => {
	return (
		<FactContainer>
			<div className="container">
				<FactTitle>{title}</FactTitle>
				<FactDesc>{description}</FactDesc>

				<FactRow>
					{
						facts && facts.map((fact, key) => (
							<FactItem fact={fact} key={key} />			
						))
					}
				</FactRow>
			</div>
		</FactContainer>
	);
};

export default FactList;
