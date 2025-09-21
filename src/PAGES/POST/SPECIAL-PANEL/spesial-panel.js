import { Icon } from '../../../COMPONENTS';
import styled from 'styled-components';

const SpesialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					name={['far', 'calendar']}
					margin="0 8px 0 0"
					size="21px"
					onClick={() => {}}
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon name={['far', 'trash-can']} size="21px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpesialPanel = styled(SpesialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	margin-top: 50px;

	& .published-at {
		display: flex;
		// align-items: center;
		font-size: 18px;
	}

	& .published-at > svg {
		// position: relative;
		top: -1px;
		margin-right: 10px;
	}
	& .buttons {
		display: flex;
	}
`;
