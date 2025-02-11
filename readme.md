# Convex Task Manager

A real-time task management application built with React, TypeScript, and Convex. This project demonstrates real-time data synchronization using Convex as the backend.

## Project Structure

```
.
├── api/              # Convex backend
│   ├── convex/
│   │   ├── schema.ts # Database schema
│   │   └── tasks.ts  # API endpoints
│   └── ...
└── app/              # React frontend
    ├── src/
    │   ├── App.tsx
    │   └── ...
    └── ...
```

## Features

- ✨ Real-time task updates
- ✅ Add new tasks
- 🔄 Toggle task completion
- 🎯 Automatic data synchronization
- 🎨 Clean, modern UI

## Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- A Convex account (free tier available at [convex.dev](https://convex.dev))

## Setup Instructions

### 1. Backend Setup (api/)

```bash
# Navigate to the API directory
cd api

# Install dependencies
yarn install

# Initialize Convex
npx convex dev
```

This will:
- Prompt you to log in to Convex
- Create a new project
- Save your deployment URL

### 2. Frontend Setup (app/)

```bash
# Navigate to the app directory
cd ../app

# Install dependencies
yarn install

# Create .env.local file and add your Convex URL
echo "VITE_CONVEX_URL=your_convex_url" > .env.local

# Start the development server
yarn dev
```

Replace `your_convex_url` with the URL provided by Convex during the backend setup.

## Development

1. Keep the Convex development server running in one terminal:
```bash
cd api && npx convex dev
```

2. Run the frontend development server in another terminal:
```bash
cd app && yarn dev
```

The application will be available at `http://localhost:5173`

## Database Schema

The application uses a simple task schema:

```typescript
tasks: defineTable({
  text: v.string(),
  isCompleted: v.boolean(),
})
```

## API Endpoints

- `tasks.get`: Fetches all tasks
- `tasks.add`: Adds a new task
- `tasks.toggle`: Toggles task completion status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning or as a starting point for your own applications.
