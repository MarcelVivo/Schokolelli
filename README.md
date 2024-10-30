# Webdesign-Projektarbeit-React

## Anforderungen

Getestet mit Windows 11

- [Visual Studio Code] https://code.visualstudio.com/Download
- [Docker] https://docs.docker.com/desktop/install/windows-install/
- [Node.js] https://nodejs.org/en/download/package-manager | LTS-Version wird empfohlen
- [Github] https://git-scm.com/downloads

## Empfohlene Erweiterungen in Visual Studio Code

- `mtxr.sqltools`
- `mtxr.sqltools-driver-mysql`
- `humao.rest-client`
- `ms-azuretools.vscode-docker`

## W3Schools-Datenbank in Docker

### Übersicht

Geforkt von [https://github.com/AndrejPHP/w3schools-database](https://github.com/AndrejPHP/w3schools-database) für akademische Zwecke.

Dieses Repository stellt zur Verfügung:

- Ein Docker-Compose, das die Datenbank auf Port 3309 (nicht Standard, keine Konflikte) einrichtet.
- Initialisiert die Daten der Datenbank von w3schools (bereitgestellt von @AndrejPHP).
- Visual Studio Code-Konfiguration.

### Fork in dein GitHub-Konto

1. Gehe zu [github.com](https://github.com), erstelle ein neues Konto oder logge dich ein.
2. Forke mein Repository: [https://github.com/theradun2git/Webdesign-Projektarbeit-React](https://github.com/theradun2git/Webdesign-Projektarbeit-React)
3. Nun hast du das Repository `w3schools-database` in deinem GitHub-Konto. Klone es mit:

   ```bash
   git clone https://github.com/DEINUSERNAME/w3schools-database
   cd w3schools-database
   code .

# Die Datenbank und die REST-API starten

```bash
docker-compose up
```

## Die React-App wie folgt starten

```bash
cd my-app
npm start
```

## Wie setze ich das zurück?

Führe folgendes aus:

```bash
docker compose down
rm -rf data
docker compose up -d
```

## Tabellen

Beim Starten des Docker-Containers wird eine Datenbank namens `w3schools` mit den folgenden Tabellen erstellt:

- categories
- customers
- employees
- orders
- order_details
- products
- shippers
- suppliers

und die entsprechenden Daten werden eingefügt.

## Funktionen

- Abrufen und Auflisten aller Kategorien
- Erstellen einer neuen Kategorie
- Aktualisieren einer bestehenden Kategorie
- Löschen einer Kategorie
- Fehlermeldung an den Benutzer, wenn eine Kategorie gelöscht werden soll, die nicht gelöscht werden kann.

## Konfiguration der "React"-App

### Installation mit Visual Studio Code

1. Öffne ein integriertes Terminal.
2. Wechsel in das Root-Verzeichnis.
3. Installiere die Anwendung mit:

   ```bash
   npx create-react-app my-app
   ```

4. Nach der Installation ins Verzeichnis `my-app` wechseln.
5. Starte die App mit:

   ```bash
   npm start
   ```

6. Wichtig: Ändere den Port von 3000 auf 3001 und bestätige mit "Y".

### Konfiguration von "CORS"

1. Installiere CORS im `rest-api`-Ordner mit:

   ```bash
   npm install cors
   ```

2. Füge diese Zeile in `.\rest-api\app.js` hinzu:

   ```javascript
   app.use(cors({ origin: 'http://localhost:3001' })); // Erlaubt Anfragen von deiner React-App
   ```

   (Füge diese Zeile vor `const relations ...` ein)

3. Baue den Docker-Container neu mit:

   ```bash
   docker build && docker compose up
   ```

   Alternativ kannst du die Container und Bilder in Docker manuell löschen und anschließend `docker compose up` ausführen.

### Erforderliche Pakete für die Navigationsleiste

Installation über die Befehlszeile in `my-app`:

```bash
npm install react-router-dom
```

### Erforderliche Pakete für das Design

Installation über die Befehlszeile in `my-app`:

```bash
npm install react-bootstrap bootstrap
```

### Fehlerbehebung bei "npm-start"-Problemen

1. Überprüfe Node.js mit:

   ```bash
   node -v
   ```

2. Überprüfe die npm-Version mit:

   ```bash
   npm -v
   ```

3. Installiere npm erneut über die Befehlszeile in `my-app`:

   ```bash
   npm install
   ```


## Projektfunktionen

- Anzeige von 3 verschiedenen Entitäten mit GET (Kundenliste, Kategorien, Produktliste)
- 2 verschiedene Entitäten mit POST, PATCH, DELETE (Buttons mit Neu, Bearbeiten oder Löschen)
- Drei oder mehr zusätzliche Funktionen sind verfügbar und funktionsfähig:
  - Navigationsleiste
  - Startseite mit Schokolelli Logo
  - Fotogallerie
  - Bestellormular
  - Preisliste

## Journal

### 25.10.2024

- Einarbeitung in „React“, 
- Docker aktiviert
- Github aktualisiert 

### 27.10.2024

- Festlegung von Funktionen in der App 
- Fotogallerie
- Bestellformular
- Farbdefinition von der Seite (Buttons, Schriften, Hintergrund)
. Codes angepasst
- Bei dem Bestellformular die Kategorien "Dubai" Schokolade im Dropdown Menue hinzugefügt

### 28.10.2024

- Firmenlogo auf der Startseite einfügen
- Pfad von der Datei ist nicht korrekt, es funktioniert nicht. 
- Nach mehreren Anläufen hat es funktioniert

### 29.10.2024

- Nach dem einfügen des Logos auf der Startseite, zeigt es das Bestellformular und die Fotogallerie nicht mehr an
- Fehlersuche
- Das Bestellformular und die Fotogallerie sind wieder hergestellt
- Jedoch fehlt das Logo auf der Startseite wieder. ( Als Platzhalter wird nur "Firmenlogo" in Textform angezeigt)
- Startseite betitelung auf "Willkommen" angepasst.
- Navigations Leiste Zentriert
- Zusätzliche Seite "Preisliste" hinugefügt
- Verlinkung von "Preisliste" auf "Bestellformular" hinzugefügt

### 30.10.2024

- 
