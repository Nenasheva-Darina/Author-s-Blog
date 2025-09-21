import { Icon } from '../../../../../COMPONENTS';
import styled from 'styled-components';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
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
				size="18px"
				onClick={() => {}}
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
