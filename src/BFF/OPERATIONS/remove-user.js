import { ROLE } from '../../CONSTANTS';
import { sessions } from '../sessions';
import { deleteUser } from '../API';

export const removeUser = async (userSession, userId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
