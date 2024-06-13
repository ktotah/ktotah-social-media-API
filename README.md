# NoSQL Social Media API

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.


## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Features
- User Authentication
- CRUD operations for Users and Thoughts
- Add and Remove Friends
- Add and Remove Reactions to Thoughts

## Technology Stack
- **Node.js**: For server-side runtime environment.
- **Express.js**: For server-side logic and API routes.
- **MongoDB**: For database management.
- **Mongoose**: For database schema and interactions.

## Installation
1. Clone the repository:
``` bash
git clone https://github.com/ktotah/ktotah-social-media-API.git
```
2. Install the necessary dependencies:
``` bash
npm install
```
3. Create a `.env` file in the root directory based on the `.env.EXAMPLE` file and add your MongoDB URI.


## Usage
1. Start the server:
``` bash
node server.js
```
2. Use Insomnia or another API client to test the API routes.

## API Routes

### User Routes
- `GET /api/users` - Retrieves all users.
- `GET /api/users/:userId` - Retrieves a specific user by their ID.
- `POST /api/users` - Creates a new user.
- `PUT /api/users/:userId` - Updates an existing user by their ID.
- `DELETE /api/users/:userId` - Deletes a user by their ID.
- `POST /api/users/:userId/friends/:friendId` - Adds a friend to the user's friend list.
- `DELETE /api/users/:userId/friends/:friendId` - Removes a friend from the user's friend list.

### Thought Routes
- `GET /api/thoughts` - Retrieves all thoughts.
- `GET /api/thoughts/:thoughtId` - Retrieves a specific thought by its ID.
- `POST /api/thoughts` - Creates a new thought.
- `PUT /api/thoughts/:thoughtId` - Updates an existing thought by its ID.
- `DELETE /api/thoughts/:thoughtId` - Deletes a thought by its ID.
- `POST /api/thoughts/:thoughtId/reactions` - Adds a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Removes a reaction from a thought.

## Walkthrough Video
[Link to Walkthrough Video](https://drive.google.com/file/d/1PY2Bd7dVyHvN4_OMPWsmo9GR_Y-EPl7t/view?usp=sharing)

## Contributing
Your contributions are what make the community incredible. If you have an idea for improving this project, please fork the repository and create a pull request, or open an issue with your suggestions. For substantial changes, please open an issue first to discuss what you would like to change.

## License
![License](https://img.shields.io/badge/License-MIT-blue.svg)

This project is licensed under the [MIT License](./LICENSE).

## Questions
For any questions, please contact me with the information below.

* GitHub: [ktotah](https://github.com/ktotah)
* Email: [ket2137@columbia.edu](mailto:ket2137@columbia.edu)
