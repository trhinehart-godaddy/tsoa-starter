# Example Client

This is an example client that uses the `swagger.json` from the [API](../api/README.md) to generate a TypeScript client.

## Generate Client

```bash
npm run build
```

This will generate types/client files in [./src/generated](./src/generated). You would then `npm publish` this package
to a private or public npm registry to be used by a [consumer](../consumer/README.md).
