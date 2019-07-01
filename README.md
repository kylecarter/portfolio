# Portfolio
This repo represents the personal website for Kyle Carter to act as a portfolio for his professional web development knowledge. This repo will be shared with colleagues and potential employers to review coding conventions and code management by Kyle. This repo is not intended for use by other individuals and should not be considered code that can be used in projects outside of this repo. The project is built with a variety of front end technologies with a Django back end for server side management.

# Project Set Up
This project had the following dependencies:

* Docker
  - Docker Compose
* Nodejs
  - Nextjs
  - React
  - Postcss
* Python
  - Django
  - Wagtail
  - Pipenv
* Postgresql

## The project needs the following environment variables
- PIPENV_VENV_IN_PROJECT
- SECRET_KEY
- ALLOWED_HOSTS
- DJANGO_HOST
- DJANGO_PORT
- DEBUG
- JS_DEBUG
- LOCAL_DEV
- TEMPLATE_DEBUG
- PRODUCTION
- NODE_ENV
- PORT
- DB_NAME
- DB_USER
- DB_HOST
- DB_PORT

For local development it is encouaged to create a `.env` file and define these variables there. In production, these variables will be set in the hosting environment.

## Initalizing the project
1. Install the latest versions of Nodejs, Python 3 and Docker.
   > __NOTE__: Docker Compose has to be installed as a dependent package.
2. Run `docker-compose -f docker-compose.dev.yml build --force-rm`
   > __NOTE__: The above command will build the containers and start the process using the development environment set up.
3. Create a database.
   1. Access the database container shell: `docker exec -it portfolio_db_1 bash`.
   2. Log into the database: `psql -U postgres`.
   3. Create the database: `create database portfolio`.
4. Run initial migrations: `docker-compose -f docker-compose.dev.yml run web python backend/manage.py migrate --noinput`.
5. Create a Django super user: `docker-compose -f docker-compose.dev.yml run web python backend/manage.py createsuperuser`.

## Running the development environments
`docker-compose -f docker-compose.dev.yml up -d`
