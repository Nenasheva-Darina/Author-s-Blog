import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<Div>
			<div></div>
		</Div>
	);
};

// json-server --watch src/db.json --port 3005
