# CLAUDE.md

This is a pnpm monorepo containing `@mew/utils`, a TypeScript library of general-purpose utility functions.

## Structure

- Package: `packages/utils/`
- Source: `packages/utils/src/filter.ts`
- Tests: `packages/utils/tests/filter.test.ts`

## Commands

```sh
# Full CI check: format, lint, typecheck, unit tests
pnpm test

# Auto-fix formatting and lint issues
pnpm run fix

# Run a single test file
cd packages/utils && npx vitest run tests/filter.test.ts
```

## Conventions

**Structure**

- Kebab-case filenames (`mean-by.ts`).
- Flat directory structure (`/src/filter.ts`).

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
