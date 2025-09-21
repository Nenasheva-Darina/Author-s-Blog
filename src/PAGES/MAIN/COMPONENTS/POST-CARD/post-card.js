// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../COMPONENTS';
import styled from 'styled-components';

const PostCardConteiner = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							{publishedAt && (
								<Icon
									inactive={true}
									margin="0 8px 0 0 "
									name={['far', 'calendar']}
									size="21px"
								/>
							)}
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								margin="0 8px 0 0 "
								name={['far', 'comment']}
								size="21px"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardConteiner)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		border-top: 1px solid #000;
		padding: 5px;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;
