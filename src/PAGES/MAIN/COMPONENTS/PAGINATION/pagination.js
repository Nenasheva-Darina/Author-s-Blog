import styled from 'styled-components';
import { Button } from '../../../../COMPONENTS';

const PaginationConteiner = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationConteiner)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0 20px;
	padding: 0 35px;

	& button {
		margin: 0 5px;
		padding: 20px;
	}

	& .current-page {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
		width: 100%;
		height: 100%;
		text-align: center;
		border: 1px solid #000;
		padding: 8px;
	}
`;
