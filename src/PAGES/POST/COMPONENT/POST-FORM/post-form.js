import { useRef } from 'react';
import { Input } from '../../../../COMPONENTS';
import { Icon } from '../../../../COMPONENTS';
import { SpesialPanel } from '../../SPECIAL-PANEL/spesial-panel';
import { savePostAsync } from '../../../../ACTIONS';
import { sanizeContent } from './UTILS';
import { useServerRequest } from '../../../../HOOKS';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const reqestServer = useServerRequest();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(reqestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />

			<SpesialPanel
				publishedAt={publishedAt}
				content={content}
				margin="20px 0"
				editButton={
					<Icon
						name={['far', 'floppy-disk']}
						margin="-2px 0  0 10px"
						onClick={onSave}
					/>
				}
			/>

			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	margin-top: 50px;

	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}

	//ok! mTOP-!ok
`;

//contentEditable={true} -делает любой див редактируемым
// suppressContentEditableWarning={true} - убирает предупреждения
//white-space: pre-line; - что бы сработал перенос строки с использованием \n\n
