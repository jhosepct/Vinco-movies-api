# Organizable API

Welcome to Movies-API. 😎

## Instructions

- Clone this repo on your local machine.
- Run `npm i`
- Start the server `npm run dev`

## About the API

### Endpoints

Here the list of available endpoints. The most important are marked with (\*)

Manage users:

- POST /signup
- GET /profile/:id
- PATCH /profile/:id
- DELETE /profile/:id

Manage authentication:

- POST /login \* This endpoint return your authentication token (required for everything else 👀)
- POST /logout

Manage movies:

- GET /movies \* This endpoint return all the data needed to manage the actions on the Main page.
- POST /movies
- GET /movies/:id \* This endpoint return all the data needed to manage the actions on the Board page.
- PATCH /movies/:id
- PUT /movies/:id
- DELETE /movies/:id

### API Authentication

This API uses HTTP Authentication Token. Make a POST request to `/login` with the `email` and
`password` of the test user created through the seed file:

```json
{
  "email": "k3v1nct@mail.com",
  "password": "123456"
}
```

Since the username and password are valid, the server will return the user information with the authorization token:

```json
{
  "id": 1,
  "email": "k3v1nct@mail.com",
  "name": "kevin",
  "last_name": "ct",
  "phone": "902206316",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2MzU5OTg5LCJleHAiOjE2NjYzNjM1ODl9.6kY3aJ7NHq4OfWTxNjMPfnNLPdmB9Ypxvpat1fPycNU"
}
```

This token should be included on the `headers` for almost all the other endpoints, otherwise you will get an `access denied` error.

To include the token on your headers, add a `key`-`value` pair in this way:

- `key`: Authorization
- `value`: Token token="`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2MzU5OTg5LCJleHAiOjE2NjYzNjM1ODl9.6kY3aJ7NHq4OfWTxNjMPfnNLPdmB9Ypxvpat1fPycNU`"

###URL API: [link](https://vinco-movies-api.herokuapp.com/),
