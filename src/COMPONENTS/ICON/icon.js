import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontAwesomeLibrary';
import styled from 'styled-components';

const IconContainer = ({ className, name, inactive, ...props }) => (
	<div className={className}>
		<FontAwesomeIcon icon={name} {...props} />
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled, color = '#000' }) => (disabled ? '#ccc' : color)};

	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}
`;
