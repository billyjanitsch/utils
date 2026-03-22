This is a pnpm TypeScript monorepo containing:

- `/packages/utils/`: a library of general-purpose utility functions

## Commands

```sh
# Full CI check: format, lint, typecheck, unit tests
pnpm test

# Auto-fix format and lint issues
pnpm run fix
```

## Conventions

- Use kebab-case filenames (`mean-by.ts`).
- Prefer named exports.
- Prefer modern TypeScript syntax.
- Strive for type safety. Avoid type casts.
