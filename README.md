# Qwiery Data Access Layer

Generic and extensible graph data access layer.

## Installation

```bash
npm i lodash moment @orbifold/utils @orbifold/dal @orbifold/projections @orbifold/graphs
```

## Usage

```javascript
import { Qwiery } from "@orbifold/dal";
async function main() {
    const qwiery = new Qwiery();
    await qwiery.randomGraph();
    console.log(await qwiery.nodeCount());
}
main();
```
