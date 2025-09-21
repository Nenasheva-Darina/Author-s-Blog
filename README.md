ОБЛАСТИ ХРАНЕНИЯ ДАННЫХ:

- база данных JSON-server
- BFF
- редакс стор

СУЩНОСТЬ ПРИЛОЖЕНИЯ:

- пользователь:
    - БД (список пользователь)
    - BFF (сесия текущего)
    - стор (отображение в браузере)

- роль пользователя:
    - БД (список ролей)
    - BFF (сессия пользователя с ролью)
    - стор (использование на клиенте)

- статья:
    - БД (список статей)
    - стор (отображение в браузере)

- комментарий:
    - БД (список комментариев)
    - стор (отображение в браузере)

ТАБЛИЦЫ БД:

- пользователи
    - users: id / login / password / registed_ad / role_id
- роли
    - roles: id / name
- статьи
    - posts: id / title / image_url / content / published_at
- комментарии
    - comments: id / author_id / post_id / content

СХЕМА СОСТОЯНИЯ НА BFF:

- сессия текущего пользователя:
    - login / password / role

СХЕМА ДЛЯ РЕДАКС СТОР (НА КЛИЕНТЕ):

- user: id / login / roleId / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
