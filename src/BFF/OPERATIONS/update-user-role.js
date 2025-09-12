import { ROLE } from '../../CONSTANTS';
import { sessions } from '../sessions';
import { setUserRole } from '../API';

export const updateUserRole = async (hash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
