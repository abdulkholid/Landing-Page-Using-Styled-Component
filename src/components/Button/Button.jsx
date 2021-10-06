import React from 'react';
import { CtaButton, SpanAfter } from './Button.elements';

const Button = ({ to, text, variant, size, type, icon_after }) => {
	return (
		<CtaButton to={to} variant={variant} size={size} type={type}>
			{text}
			{ icon_after && <SpanAfter>{icon_after}</SpanAfter> }
		</CtaButton>
	);
};

Button.defaultProps = {
	text: 'Button',
	to: '/',
	variant: 'default',
	size: 'normal',
	type: 'solid'
};

export default Button;
