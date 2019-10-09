import { Blockchain } from '../Blockchain';
import { Block } from '../Block';

describe("blockchain", () => {
  let bc: Blockchain;

  beforeEach(() => {
    bc = new Blockchain();
  });

  it("start with genesis block", () => {
    expect(bc.getBlockByIndex(0).hash).toEqual(Block.genesis().hash);
  });

  it("adds a new block", () => {
    const data = "new block data";
    bc.addBlock(data)
    expect(bc.length).toEqual(2);
    expect(bc.getBlockByIndex(1).data).toEqual(data);
  })
})
