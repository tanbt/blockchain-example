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

  addBlock(data: String): Block {
    const lastBlock = this._chain[this._chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);
    this._chain.push(block);
    return block;
  }

  public getBlockByIndex(index: number): Block {
    return this._chain[index];
  }

}
