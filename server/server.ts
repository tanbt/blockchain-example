import { Block } from "./Block";

const block1 = Block.genesis();
const block2 = Block.mineBlock(block1, "this is block 2 data");

console.log(block1);
console.log(block2);
