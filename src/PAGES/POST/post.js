import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments } from './COMPONENT';
import { useServerRequest } from '../../HOOKS';
import { loadPostAsync } from '../../ACTIONS';
import { selectPost } from '../../SELECTORS';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();

	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	marginn: 40px 0;
	padding: 0px 80px;
`;
