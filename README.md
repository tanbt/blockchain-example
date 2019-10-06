# blockchain-example
Playaround with blockchain in Javascript / node.js

## Installation
* npm i

## Run
Client and Server should be run in different terminals.

### Client
`npm start`

### Server
* Build server: `npm run server:ts`
* Run server: `npm run server:run` or press F5
* `node .\server\dist\server.js` or just **F5** in VSCode

## Debugging

### Client
Start the server, using Chrome devtools `Sources` to search for TS files and set breakpoints in them.

### Server
Set a breakpoint in `./server/*.ts`. In VScode press F5.

## Bundle for production
* `npm run build`

## References
* [Webpack typescript](https://webpack.js.org/configuration/configuration-languages/#typescript)
* [VSCode TS debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)
