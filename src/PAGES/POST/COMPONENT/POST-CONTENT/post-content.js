import { H2 } from '../../../../COMPONENTS';
import { Icon } from '../../../../COMPONENTS';
import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>

			<div className="special-panel">
				<div className="published-at">
					<Icon
						name={['far', 'calendar']}
						margin="0 8px 0 0"
						size="21px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						name={['far', 'pen-to-square']}
						margin="0 10px 0  0"
						size="21px"
						onClick={() => {}}
					/>

					<Icon name={['far', 'trash-can']} size="21px" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	& .published-at > svg {
		position: relative;
		top: -1px;
		margin-right: 10px;
	}
	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
