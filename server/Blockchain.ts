import { Block } from "./Block";

export class Blockchain {

  private _chain: Array<Block> = [];

  constructor() {
    const genesisBlock = Block.genesis();
    this._chain.push(genesisBlock);
  }

  get length(): number {
    return this._chain.length;
  }

  get chain(): Array<Block> {
    return this._chain;
  }

  addBlock(data: String): Block {
    const lastBlock = this._chain[this._chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);
    this._chain.push(block);
    return block;
  }

  public isValidChain(chain: Blockchain): Boolean {
    if (JSON.stringify(chain.chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain.chain[i];
      const prevBlock = chain.chain[i - 1];

      if (block.prevHash !== prevBlock.hash ||
          block.hash !== Block.blockHash(block)
        ) {
        return false;
      }
    }

    return true;
  }

  replaceChain(newChain: Blockchain) {
    if(newChain.length <= this.length) {
      console.log("Received chain is not longer than the current chain.")
      return;
    } else if(!this.isValidChain(newChain)) {
      console.log("Received chain is invalid.")
      return;
    }

    this._chain = Array.from(newChain.chain);
  }
}
