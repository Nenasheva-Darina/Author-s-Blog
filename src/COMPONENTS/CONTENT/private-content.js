import { useSelector } from 'react-redux';
import { selectUserRole } from '../../SELECTORS';
import { Error } from '../ERROR/error';
import { checkAccess } from '../../UTILS';
import { ERROR } from '../../CONSTANTS';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
