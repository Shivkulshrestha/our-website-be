# Portfolio Website Backend

A Node.js/Express backend for the portfolio website.

## Features

- Contact form API endpoint
- CORS enabled for frontend integration
- Express server with JSON body parsing

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
node index.js
```

The server will run on port 5000 by default, or the port specified in the `PORT` environment variable.

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received!"
}
```

## Technologies Used

- Node.js
- Express.js
- CORS
- Nodemon (for development)

## License

ISC 