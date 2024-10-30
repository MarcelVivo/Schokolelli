# W3Schools Database in Docker

Forked from https://github.com/AndrejPHP/w3schools-database for academic purposes.

This repository provides:

- a docker compose which sets up the DB on port 3309 (non-default, no clashes)
- initializes the database data from w3schools (provided by @AndrejPHP) 
- Visual Studio Code config

## Setup 

- Setup is as easy as:

```bash
docker compose up -d
```

-  Data is stored in the data directory


## Tables

When the docker container starts, it creates database named __w3schools__ with the following tables

    categories
    customers
    employees
    orders
    order_details
    products
    shippers
    suppliers
    
and inserts the respective data. 

## How to reset?

Execute:

```bash
docker compose down
rm -rf data
docker compose up -d
```

# **Anforderungen / Tools** #

- Visual Studio Code (https://code.visualstudio.com/Download)
- Docker (https://docs.docker.com/desktop/install/windows-install/)
- Node.js (https://nodejs.org/en/download/package-manager | LTS version is preferred)
- Git (https://git-scm.com/downloads)

# Werkzeuge im Visual Studio Code


    - mtxr.sqltools
    - mtxr.sqltools-driver-mysql
    - humao.rest-client
    - ms-azuretools.vscode-docker

# W3Schools Datenbank

Forked von https://github.com/AndrejPHP/w3schools-database for academic purposes.

Dieses Repository bietet:
ein Docker-Compose, das die Datenbank auf Port 3309 einrichtet
initialisiert die Datenbankdaten von w3schools (bereitgestellt von @AndrejPHP)
Visual Studio Code-Konfiguration

# Fork zu meinem GitHub

https://github.com/MarcelVivo

Jetzt haben Sie ein Repository w3schools-database in Ihrem GitHub-Konto. Klonen Sie es mit

git clone https://github.com/YOURUSERNAME/w3schools-database
cd w3schools-database
code .

Führen Sie die Datenbank / Rest-API aus:
docker-compose up

Starte die React App:
cd my-app
npm start

Ein Reset durchfhren:
docker compose down
rm -rf data
docker compose up -d


Tabellen:
categories
customers
employees
orders
order_details
products
shippers
suppliers

Features:

    1. Get and list all categories
    2. Create a new category
    3. Update an existing category
    4. Delete a category
    5. Give an error message to the user when
    trying to delete a category that can't be deleted

Konfiguration von der React App:
- Öffnen Sie ein Inline-Terminal
- Wechseln Sie zum Stammordner
- Installieren Sie mit npx create-react-app my-app
- Nach der Installation --> wechseln Sie zum Ordner „my-app“
- Führen Sie die App mit npm start aus
- Wichtig: Wechseln Sie von Port 3000 auf 3001 => bestätigen Sie mit „Y“

Konfiguration von "CORS"

    Install CORS in the "rest-api" - Folder with npm install cors
    add this text to .\rest-api\app.js: app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from your React app (before const relations ...)
    Rebuild Docker Container with docker build && docker compose up or manually delete the containers and images in Docker. Then run Docker Compose up

# Journal

14.10.2024
- Einarbeitung in die Tools und Funktionen
- Kategorien erstellen (Bestellformular, Fotogallerie, Produkte)

19.10.2024
- Youtube Tutorial schauen über React
- Fotos für Fotogallerie eingefügt
- Bestellformular angeasst

