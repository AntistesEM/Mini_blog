# **Тестовое задание "Мини-блог" для Fullstack-разработчик на Python**

## **"Мини-блог"**

"Мини-блог" – простое веб-приложение для ведения блога с базовым функционалом.

Бэкенд разработан на **Django**, а фронтенд – на **React**. Взаимодействие между частями осуществляется через **REST API (Django REST Framework)**. Для стилизации Использовался фреймворк **Bootstrap**. Для хранения данных Использовался **PostgreSQL**.

---

### **Развернутый проект Docker**

В корневом каталоге, где находится файл `docker-compose.yml`, создать файл `.env` в соответствии с шаблоном:

      ```plaintext
        # SUPERUSER
        SUPERUSER_PASSWORD=userpassword
        # DATABASE
        DATABASE_NAME=your_db
        DATABASE_USER=user
        DATABASE_PASSWORD=password
        DATABASE_HOST=db
        DATABASE_PORT=5432
        # settings.py
        DEBUG= #False or True
        SECRET_KEY=*******  # можно сгенерировать на сайте https://djecrety.ir или с помощью терминала python: >>> import secrets >>> print(secrets.token_urlsafe(50))      
        ALLOWED_HOSTS=#например через запятую: localhost,127.0.0.1,<ИМЯ ДОМЕНА ИЛИ IP АДРЕС СЕРВЕРА>
        CORS_ALLOWED_ORIGINS=#например через запятую: http://localhost:3000,http://localhost:5173,http://localhost:4173
      ```

Для доступа в админку использовать следующие данные:

    - Username: admin
    - Password: userpassword из файла `.env`

---

### **Требования**

Убедитесь, что в вашей системе установлены Python и Node js:

- [Python version 3.13.1+](https://www.python.org/downloads/release/python-3913/)
- [Node version 22.12.0+](https://nodejs.org/en/download/)

---

### **Структура проекта**

- [Описание задания](project_info)
- [Клиентская часть (фронтенд)](frontend)
- [Серверная часть приложения (бэкенд)](backend)

---

### **Локальный запуск приложения**

1. Запускаем терминал в директории, где планируется разместить папку с файлами проекта
2. Клонируем репозиторий:\
   `git clone https://github.com/AntistesEM/Mini_blog.git`
3. Открываем папку `Mini_blog` в любой IDE.
4. Запускаем Фронтенд и Бэкенд в соотвествии с инструкциями:

    - [Фронтенд](frontend)
    - [Бэкенд](backend)

---

### **Используемые технологии**

- **Backend**: Python с фреймворком Django и Django REST Framework для создания API, использующий PostgreSQL в качестве базы данных.
- **Frontend**: React с использованием React Router для маршрутизации, Axios для запросов, Vite как сборщик, TypeScript для типизации, и Bootstrap для стилизации интерфейса.
