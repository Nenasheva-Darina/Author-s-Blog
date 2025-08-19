import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120 px 0;
`;
const H2 = styled.div`
	text-alight: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<FontAwesomeIcon icon={faEnvelope} />
				<H2>Контент страницы</H2>
				<FontAwesomeIcon icon={faEnvelope} />
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post/" element={<div>Новая статья</div>} />
					<Route path="/post/:post_id" element={<div>Статья</div>} />
					<Route path="*" element={<div>Страница с ошибкой </div>} />
				</Routes>
			</Content>
			<FontAwesomeIcon icon={faEnvelope} />
			<Footer />
		</>
	);
};

// json-server --watch src/db.json --port 3005
