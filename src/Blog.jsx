import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './COMPONENTS';
import { Authorization, Registration, Users } from './PAGES';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;
const Page = styled.div`
	padding: 120px 0;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post/" element={<div>Новая статья</div>} />
					<Route path="/post/:post_id" element={<div>Статья</div>} />
					<Route path="*" element={<div>Страница с ошибкой </div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};

// json-server --watch src/db.json --port 3005
