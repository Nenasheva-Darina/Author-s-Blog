import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../../COMPONENTS';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 6px;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;

	&:hover {
		background-color: #ccccccff;
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
	}
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<Icon name="backward" onClick={() => navigate(-1)} />

				<Link to="/post">
					<Icon name={['far', 'file-lines']} />
				</Link>
				<Link to="/users">
					<Icon name="users" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
