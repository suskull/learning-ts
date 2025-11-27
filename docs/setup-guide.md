# Setup Guide

This guide will walk you through setting up the TypeScript Mastery Course development environment on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (version 18.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (version 9.0.0 or higher)
   - Comes with Node.js
   - Verify installation: `npm --version`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

4. **PostgreSQL** (version 14 or higher)
   - Download from [postgresql.org](https://www.postgresql.org/download/)
   - Verify installation: `psql --version`

### Recommended Tools

- **VS Code** with TypeScript extensions
- **Postman** or similar API testing tool
- **PostgreSQL GUI** (pgAdmin, TablePlus, etc.)

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd typescript-mastery-course
```

### 2. Install Dependencies

Install all workspace dependencies:

```bash
npm install
```

This will install dependencies for all packages in the monorepo.

### 3. Set Up PostgreSQL Database

Create a new PostgreSQL database for the course:

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE typesafe_dev;

# Create user (optional)
CREATE USER typesafe_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE typesafe_dev TO typesafe_user;

# Exit psql
\q
```

### 4. Configure Environment Variables

Create environment file for the API:

```bash
cd packages/api
cp .env.example .env
```

Edit `.env` with your database credentials:

```env
DATABASE_URL="postgresql://typesafe_user:your_password@localhost:5432/typesafe_dev"
JWT_SECRET="your-secret-key-here"
PORT=3000
NODE_ENV=development
```

### 5. Run Database Migrations

Initialize the database schema:

```bash
cd packages/api
npx prisma migrate dev
```

This will:
- Create database tables
- Generate Prisma Client
- Seed initial data (if configured)

### 6. Verify Installation

Build all packages:

```bash
npm run build
```

Run tests:

```bash
npm test
```

If all tests pass, your setup is complete!

## Development Workflow

### Starting the Development Servers

**API Server:**
```bash
npm run dev:api
```
The API will be available at `http://localhost:3000`

**Web Application:**
```bash
npm run dev:web
```
The web app will be available at `http://localhost:5173`

### Running Tests

**All packages:**
```bash
npm test
```

**Specific package:**
```bash
npm test -w @typesafe/api
npm test -w @typesafe/web
npm test -w @typesafe/shared
```

**Watch mode:**
```bash
cd packages/api
npm run test:watch
```

### Linting and Formatting

**Lint all code:**
```bash
npm run lint
```

**Format all code:**
```bash
npm run format
```

## Troubleshooting

### Common Issues

#### 1. Port Already in Use

If port 3000 or 5173 is already in use:

```bash
# Find process using the port
lsof -i :3000

# Kill the process
kill -9 <PID>
```

Or change the port in `.env` (API) or `vite.config.ts` (web).

#### 2. Database Connection Errors

- Verify PostgreSQL is running: `pg_isready`
- Check DATABASE_URL in `.env`
- Ensure database exists: `psql -l`
- Check user permissions

#### 3. TypeScript Compilation Errors

- Clear build cache: `rm -rf packages/*/dist`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

#### 4. Module Not Found Errors

- Ensure all dependencies are installed: `npm install`
- Check workspace references in `tsconfig.json`
- Rebuild shared package: `npm run build -w @typesafe/shared`

#### 5. Prisma Issues

- Regenerate Prisma Client: `npx prisma generate`
- Reset database: `npx prisma migrate reset`
- Check schema syntax: `npx prisma validate`

### Getting Help

If you encounter issues not covered here:

1. Check the [FAQ](./faq.md)
2. Search existing issues in the repository
3. Open a new issue with:
   - Your operating system
   - Node.js and npm versions
   - Error messages
   - Steps to reproduce

## Platform-Specific Notes

### macOS

- Install Homebrew for easier package management
- PostgreSQL can be installed via: `brew install postgresql@14`

### Windows

- Use WSL2 for better compatibility
- Install PostgreSQL via the Windows installer
- Use Git Bash or PowerShell for commands

### Linux

- Use your distribution's package manager
- Ubuntu/Debian: `sudo apt install postgresql`
- Fedora: `sudo dnf install postgresql-server`

## Next Steps

Once your environment is set up:

1. Read the [Course Overview](../README.md)
2. Review the [Glossary](./glossary.md)
3. Start with [Module 01](../scenarios/module-01/README.md)

Happy learning! 🚀
