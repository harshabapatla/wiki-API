**README for RESTful API using Node.js, Express, and MongoDB**

This repository contains a RESTful API implementation using Node.js, Express, and MongoDB to perform CRUD operations on articles. The API allows you to manage articles with titles and content, and it follows the principles of Representational State Transfer (REST).

## Prerequisites

Before running the API, ensure you have the following dependencies installed:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Getting Started

To run the API on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up the MongoDB connection:

   - Install and run MongoDB on your machine.
   - Update the database connection configuration in the `app.js` file.

4. Start the server:

   ```bash
   npm start
   ```

   The API server will now be running on `http://localhost:3000`.

## API Endpoints

The API provides the following endpoints to interact with the articles:

1. **GET /articles**

   - Fetch all articles.
   - Response: JSON array containing all articles.

2. **POST /articles**

   - Create a new article.
   - Request Body: JSON object with `title` and `content` properties.
   - Response: JSON object containing the created article.

3. **GET /articles/:articleTitle**

   - Fetch a specific article by its title.
   - Response: JSON object representing the article.

4. **PUT /articles/:articleTitle**

   - Update an existing article by its title.
   - Request Body: JSON object with updated `title` and/or `content` properties.
   - Response: JSON object containing the updated article.

5. **PATCH /articles/:articleTitle**

   - Partially update an existing article by its title.
   - Request Body: JSON object with one or more of the following properties: `title`, `content`.
   - Response: JSON object containing the updated article.

6. **DELETE /articles/:articleTitle**

   - Delete an article by its title.
   - Response: JSON object containing the deleted article.

## Request and Response Format

The API expects and produces data in JSON format. When sending a request with a request body, use the `Content-Type: application/json` header.

**Example Request:**

```json
POST /articles
Content-Type: application/json

{
  "title": "Sample Article",
  "content": "This is a sample article."
}
```

**Example Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "title": "Sample Article",
  "content": "This is a sample article."
}
```

## Status Codes

The API uses standard HTTP status codes to indicate the result of each request. Here are some of the common ones:

- `200 OK` - The request was successful, and the response contains the requested data.
- `201 Created` - The resource was successfully created.
- `204 No Content` - The request was successful, but there is no data to return (e.g., for DELETE requests).
- `400 Bad Request` - The request was malformed or invalid.
- `404 Not Found` - The requested resource does not exist.
- `500 Internal Server Error` - An unexpected error occurred on the server.

## Contribution

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This API is built using Node.js, Express, and MongoDB, and it incorporates the principles of RESTful API design. Thanks to the creators and maintainers of these wonderful tools and technologies.

Happy coding!
