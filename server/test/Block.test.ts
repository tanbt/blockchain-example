import { Block } from '../Block';

describe("Block", () => {
  let data: String, prevBlock: Block, block: Block;

  beforeEach(() => {
    prevBlock = Block.genesis();
    data = 'bar';
    block = Block.mineBlock(prevBlock, data)
  });

  it("sets the `data` to match the input", () => {
    expect(block.data).toEqual(data);
  });

  it("sets the previous hash to match the hash of previous block", () => {
    expect(block.prevHash).toEqual(prevBlock.hash);
  });

});