import { FactCol, FactCard, FactImageCard, FactColTitle, FactColDesc } from './FactItem.elements';

const FactItem = ({ fact }) => {
	return (
		<FactCol>
			<FactCard>
                {
                    fact.image && <FactImageCard style={{backgroundImage: `url(${fact.image})`}} />
                }
				<FactColTitle>{fact.title}</FactColTitle>
				<FactColDesc>{fact.description}</FactColDesc>
			</FactCard>
		</FactCol>
	);
};

export default FactItem;
