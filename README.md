# Pafin Assignment

This is a project built using React and TypeScript, based on Vite as the build and development tool.


## How to Run

You can start the development server locally with the following command:

```bash
pnpm install
pnpm run dev
```
## Development Server

When you start the development server using `pnpm run dev` , Vite will automatically choose an available port for the server. By default, it tries to use port 3000, but if that port is already in use, it will select another available port. This is why you might see a different port number, such as `http://localhost:3000/`, in your terminal.

### Configuring a Fixed Port

If you prefer to use a fixed port every time you start the development server, you can configure this in the `vite.config.js` file. Here's an example of how to set the server to always use port 3000:

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000 // Your preferred port
  }
});
```

## Running Tests

This project uses Jest for unit testing. Run the following command to execute tests:

```bash
pnpm test
```

## Technology Stack

- React
- TypeScript
- Vite
- Ant Design
- Tailwind CSS
- Jest (Testing Framework)

## Code Standards

The project uses ESLint and Prettier to ensure code quality. Run the following command to check for code standards:

```bash
pnpm run lint
```
