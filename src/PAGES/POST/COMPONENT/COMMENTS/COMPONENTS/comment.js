import { Icon } from '../../../../../COMPONENTS';
import { useDispatch } from 'react-redux';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../ACTIONS';
import { useServerRequest } from '../../../../../HOOKS';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, id, postId));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							name="circle-user"
							margin="0 10px 0 10px"
							size="18px"
							onClick={() => {}}
						/>
						{author}
					</div>

					<div className="published-at">
						{publishedAt}
						<Icon
							name={['far', 'calendar']}
							margin="0 8px 0 0"
							size="18px"
							onClick={() => {}}
						/>
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				name={['far', 'trash-can']}
				margin="0  0 0 10px"
				size="21px"
				onClick={() => {
					onCommentRemove(id);
				}}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
