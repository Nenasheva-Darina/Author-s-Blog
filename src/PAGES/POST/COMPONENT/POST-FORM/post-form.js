import { useLayoutEffect, useRef, useState } from 'react';
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
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleUrlValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleUrlValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const reqestServer = useServerRequest();

	const onSave = () => {
		const newContent = sanizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(reqestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleUrlValue(target.value);

	return (
		<div className={className}>
			{/* неуправляемые поля */}
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>

			<SpesialPanel
				id={id}
				publishedAt={publishedAt}
				content={content}
				margin="20px 0"
				editButton={
					<Icon
						name={['far', 'floppy-disk']}
						margin="-2px 0 0 0"
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
		min-height: 80px;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
	}

	//ok! mTOP-!ok
`;

//contentEditable={true} -делает любой див редактируемым
// suppressContentEditableWarning={true} - убирает предупреждения
//white-space: pre-line; - что бы сработал перенос строки с использованием \n\n
