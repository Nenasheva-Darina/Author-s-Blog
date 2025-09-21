import { getUsers } from '../API';
import { sessions } from '../sessions';
import { ROLE } from '../CONSTANTS';

export const fetchUsers = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
