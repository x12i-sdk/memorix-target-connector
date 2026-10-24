# @x12i/memorix-target-connector usage example

Metadata-driven generic target connector runtime for Memorix.

This consuming application demonstrates **prepare an outbound payload from safe template roots** using the published npm package, pinned to `1.0.3`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Write to a target using metadata-defined operations.
- Adapt a supported target definition to a connector pipeline.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-target-connector)
- [Implementation monorepo](https://github.com/x12i/memorix-generic-connectors)
- [Reviewed package source](https://github.com/x12i/memorix-generic-connectors/tree/e8dd8c95a7ccbf7d3aa881086974242e3dcc1e10/packages/memorix-target-connector)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This consumer uses authored records, local transformations or in-memory ports. It does not execute a skill/model, run a production pipeline, connect to MongoDB, materialize live relationships, acquire provider data or perform an outbound delivery. The in-memory examples do not establish durability across process restarts.
