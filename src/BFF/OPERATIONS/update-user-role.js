import { ROLE } from '../../CONSTANTS';
import { sessions } from '../sessions';
import { setUserRole } from '../API';

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
