# CLAUDE.md

This is `@mew/utils`, a TypeScript library of general-purpose utility functions.

## Structure

- Source: `/src/filter.ts`
- Tests: `/tests/filter.test.ts`

## Commands

```sh
# Full CI check: format, lint, typecheck, unit tests
npm test

# Auto-fix formatting and lint issues
npm run fix

# Run a single test file
npx vitest run tests/filter.test.ts
```

## Conventions

**Structure**

- Kebab-case filenames (`mean-by.ts`).
- Flat directory structure (`/src/filter.ts`).
- Add new functions to the `exports` field in `package.json`.

**Utility functions**

- Prefer pure functions.
- Prefer modern TypeScript syntax.
- Strive for type safety. Avoid type casts.
- **Optimize heavily for performance**, especially in hot paths.
- Collection functions should accept iterables where possible.
- Include JSDoc comments: terse description, `@param`, `@returns`.

**Tests**

- Every utility function should have tests.
- Prefer fewer, more robust tests.
- Read at least one existing test file for style guidance.
