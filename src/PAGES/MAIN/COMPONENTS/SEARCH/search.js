import PropTypes from 'prop-types';
import { Input, Icon } from '../../../../COMPONENTS';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск по заголовкам"
			/>
			<Icon inactive={true} name="magnifying-glass" size="21px" />
		</div>
	);
};
export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 330px;
	height: 40px;
	margin: 40px auto 0;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 10px;
		right: 8px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
