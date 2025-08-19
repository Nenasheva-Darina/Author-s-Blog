import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<Div>
			<FontAwesomeIcon
				icon={faEnvelope}
				style={{ fontSize: '24px', color: 'blue' }}
			/>
			<div>123</div>
		</Div>
	);
};

// json-server --watch src/db.json --port 3005
