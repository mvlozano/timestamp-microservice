
# API Project: Timestamp Microservice for FCC
[![Run on Repl.it](https://timestamp-microservice.mvlozano.repl.co/)]

## About
My solution for the [Timestamp Microservice challenge](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) for the freeCodeCamp API and Microservice certification. It was built based on the boilerplate available [here](https://github.com/freeCodeCamp/boilerplate-project-timestamp/).

## Technologies
- **Node.js** and **Express** to create the server and handle routes, requests and responses.

## Endpoints:

Endpoints | Description | Params
----------|-------------|-------------
GET `/api/:date` | Returns a JSON with the unix and utc values for the date param | date*
GET `/api/` | //Returns a JSON with the unix and utc values for the current date | none

#### Example output:
* GET `/api/2022-9-16` output:`{"unix":1663286400000,"utc":"Fri, 16 Sep 2022 00:00:00 GMT"}`
* GET `/api` output:`{"unix":1674618933273,"utc":"Wed, 25 Jan 2023 03:55:33 GMT"}`

## How to use:
```
npm install
npm start
```
