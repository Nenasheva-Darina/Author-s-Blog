import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../../COMPONENTS';
import { useSelector, useDispatch } from 'react-redux';
import { ROLE } from '../../../../../CONSTANTS';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../../SELECTORS';
import styled from 'styled-components';
import { logout } from '../../../../../ACTIONS';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 6px;
	align-items: center;
	padding: 0 0 10px 0;
`;
const UserName = styled.div`
	font-size: 18ps;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon name="right-from-bracket" onClick={onLogout} />
					</>
				)}
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
