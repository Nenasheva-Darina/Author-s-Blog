import {
	authorize,
	fetchUsers,
	fetchRoles,
	register,
	logout,
	updateUserRole,
	removeUser,
} from './OPERATIONS';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
