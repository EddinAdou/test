# Symfony Docker Setup

This repository contains a basic setup for running a Symfony application using Docker containers.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone this repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate into the project directory:

    ```bash
    cd <project-directory>
    ```


3. Install dependencies:

    ```bash
    docker compose build
    ```

5. Start the Docker containers:

    ```bash
    docker-compose up -d
    ```
6. [Config .ENV](https://symfony.com/doc/current/configuration.html)

## Managing Docker Containers

- Start the containers:

    ```bash
    docker compose up -d
    ```

- Stop the containers:

    ```bash
    docker compose down
    ```

- View logs:

    ```bash
    docker compose logs
    ```

- Access container for backend shell:

    ```bash
    docker compose exec -it php-fpm bash
  ```
  
- Access container for frontend shell:

    ```bash
    docker compose exec -it frontend bash
    ```
- Start container shell:

    ```bash
    docker start my_container
    ```
- Start container backend full:

    ```bash
    docker compose up -d nginx
    ```

- Creation of database:

    ```bash
    php bin/console doctrine:database:create
    ```  
- Creation of migration:

    ```bash
    php bin/console make:migration
    ```
  
- Usage Front:
  ```bash
  npm run start
  ```#   t e s t  
 #   t e s t  
 