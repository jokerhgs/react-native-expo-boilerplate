# Expo React Native Boilerplate

This boilerplate provides a modern, scalable starting point for building **React Native** applications using **Expo**. It includes essential developer tooling and best practices to ensure fast development, maintainable code, and high performance.

## Features

- **React Native (via Expo)**: Simplifies native code management and streamlines cross-platform development.
- **TypeScript**: Enforces type safety for improved developer experience (DX) and better maintainability.
- **Expo Router**: File-based routing for simplifying navigation and reducing the complexity of routing logic.
- **React Native Reanimated**: Enables performant, smooth animations essential for modern mobile applications.
- **React Query (TanStack)**: Efficient data fetching, caching, and state management for server-state management.
- **Zustand**: A lightweight, easy-to-use state management solution for React Native apps.
- **NativeWind**: A utility-first styling framework for rapid, responsive designs similar to Tailwind CSS.
- **ESLint & Prettier**: Enforces consistent code style and formatting, ensuring readability and maintainability.
- **Husky & Lint-Staged**: Pre-commit checks to ensure high-quality code is committed to the repository.
- **Jest**: A robust testing framework for unit and integration testing to ensure your app's functionality is thoroughly validated.

## Notes

This boilerplate is intentionally minimal, providing flexibility for a wide range of mobile app architectures and use cases. It serves as a solid foundation for projects, rather than a fully-featured solution.

You are free to extend it as needed for your project requirements, including:

- **State Management**: Zustand is included for simplicity, but you can easily replace it with Redux or other state management tools if necessary.
- **Navigation**: Expo Router provides a simple routing solution, but you may use other solutions like React Navigation if your project requires more complex navigation patterns.
- **Styling**: NativeWind is the default utility-first styling framework, but you can opt for styled-components, React Native Paper, or any other styling solution.

## Installation

To get started with this boilerplate, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/kierdev/react-native-expo-boilerplate.git
cd your-project
```

### 2. Install Dependencies

This project uses pnpm as the package manager. Ensure you have pnpm installed, then install the project dependencies:

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the project by copying the template below:

.env Template
env

```bash
# API Base URL
API_BASE_URL=https://your-api-url-here

# Environment Stage (development, production, etc.)
STAGE=development

# Other environment-specific configurations can go here
```

### 4. Start the Development Server

Once dependencies are installed, you can start the development server:

```bash
pnpm dev
```

## Project Structure

- `tests/` — Unit tests

- `husky/` — Git hook scripts

- `app/` — Application-specific tests

- `src/`

  - `components/` — Reusable UI components
  - `constants/` — Application constants (e.g., API URLs)
  - `hooks/` — Custom React hooks
  - `services/` — API calls and business logic
  - `stores/` — Zustand state management stores
  - `types/` — TypeScript types and interfaces
  - `utils/` — Utility functions and helpers

- `assets/`

  - `fonts/` — Custom fonts
  - `images/` — Image assets

- `scripts/` — Custom scripts for automation or tasks

- `.gitignore` — Git ignore rules
- `.eslintconfig.js` — ESLint configuration file
- `app.json` — Expo project configuration
- `babel.config.js` — Babel configuration file
- `expo-env.d.ts` — TypeScript definitions for Expo environment
- `metro.config.js` — Metro bundler configuration
- `nativewind-env.d.ts` — NativeWind TypeScript definitions
- `package.json` — Project metadata and dependencies
- `tailwind.config.js` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration

## Recommended Development Practices

- Environment-Based Configs: Manage environment-specific settings (e.g., dev, test, production) using .env files for easy configuration changes.

- Business Logic Separation: Keep business logic in services and API layers, leaving components for UI and presentation.

- State Management: Use Zustand for lightweight, scalable state management and React Query for handling async data fetching.

- Type Safety: Leverage TypeScript for type safety across your app to reduce runtime errors and improve developer experience.

- Code Consistency: Maintain clean, consistent code with ESLint and Prettier. Ensure adherence to coding conventions and formatting rules.

- Testing: Write unit tests with Jest alongside your components and services to ensure reliability.

- Commit Message Convention: Use Husky and Lint-Staged to enforce conventional commit messages, promoting clear version history.

## Casing Conventions

To maintain consistency across the codebase, use the following naming conventions:

- **Camel Case** (`camelCase`): For variables, function names, and method names.
  Example: `myVariable`, `getUserData()`

- **Pascal Case** (`PascalCase`): For classes, interfaces, and type aliases.
  Example: `UserService`, `IUser`

- **Kebab Case** (`kebab-case`): For file and folder names, and API routes.
  Example: `product-controller`, `/api/products`

- **Snake Case** (`snake_case`): For environment variables and constants.
  Example: `DATABASE_URL`, `MAX_RETRIES`

- **Upper Case** (`UPPERCASE`): For configuration values and constants.
  Example: `JWT_SECRET`, `MAX_CONNECTIONS`

### Author

Developed by `Joe Kier Hagos`.
