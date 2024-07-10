# CRUD-JS

A simple CRUD application using Node.js and Express.js.

## Features

- **Create** a new user
- **Read** all users
- **Update** an existing user
- **Delete** a user

## API Endpoints

### Create a New User

- **URL:** `/`
- **Method:** `POST`
- **Description:** Creates a new user.

### Get All Users

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all users.

### Update a User

- **URL:** `/:id`
- **Method:** `PATCH`
- **Description:** Updates an existing user.

### Delete a User

- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user.

## File Structure

```
CRUD-JS/
├── controller/
│   └── users.js
├── routes/
│   └── users.js
├── app.js
├── package.json
└── README.md
```
