import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../HOOKS';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../ACTIONS';
import { Icon } from '../../../COMPONENTS';
import { checkAccess } from '../../../UTILS';
import { ROLE } from '../../../CONSTANTS';
import styled from 'styled-components';
import { selectUserRole } from '../../../SELECTORS';

const SpesialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);
	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						inactive={true}
						margin="0 8px 0 0 "
						name={['far', 'calendar']}
						size="21px"
					/>
				)}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							name={['far', 'trash-can']}
							margin="0 0 0 8px"
							size="21px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpesialPanel = styled(SpesialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .published-at > svg {
		position: relative;
		top: -1px;
	}
	& .buttons {
		display: flex;
	}

	// ok!
`;

SpesialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
