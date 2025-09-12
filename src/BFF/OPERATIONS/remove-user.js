import { ROLE } from '../../CONSTANTS';
import { sessions } from '../sessions';
import { deleteUser } from '../API';

export const removeUser = async (hash, userId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
