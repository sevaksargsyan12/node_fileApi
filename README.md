# File Api

Node Express rest api for working with json files

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Installation

```bash
npm install
```

## Usage

To launch the project

```bash
npm run dev
```
or

```bash
npm start
```

## Endpoints

- <strong>POST</strong>   http://localhost:_PORT_/api/files  <strong>{some json data}</strong> - for creating new json file
- <strong>GET</strong>   http://localhost:_PORT_/api/files  - gets all files inside static folder
- <strong>GET</strong>   http://localhost:_PORT_/api/files/:id  - gets the content of file by "id"
- <strong>PUT</strong>   http://localhost:_PORT_/api/files/:id <strong>{some json data}</strong>  - writes new json data in file by "id" if file exists
- <strong>DELETE</strong>   http://localhost:_PORT_/api/files/:id  - deletes file by "id"


