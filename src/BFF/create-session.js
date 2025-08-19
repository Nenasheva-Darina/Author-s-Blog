import { removeComment } from './SESSION';
import { ROLE } from '../CONSTANTS';

export const createSession = (roleID) => {
	const session = {
		logout() {
			//Разлогинивание
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleID) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		// ничего не делать
	}

	return session;
};
