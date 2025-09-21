import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = ({ className, width, ...props }) => {
	return <input className={className} {...props} />;
};
export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	padding: 10px;
	margin: 5px;
	border: 1px solid #000;
	font-size: 18px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
