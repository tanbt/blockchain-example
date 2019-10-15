import { Blockchain } from '../Blockchain';
import { Block } from '../Block';

describe("blockchain", () => {
  let bc: Blockchain;
  let bc2: Blockchain;

  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it("start with genesis block", () => {
    expect(bc.chain[0].hash).toEqual(Block.genesis().hash);
  });

  it("adds a new block", () => {
    const data = "new block data";
    bc.addBlock(data)
    expect(bc.length).toEqual(2);
    expect(bc.chain[1].data).toEqual(data);
  });

  it("validates a valid chain", () => {
    bc2.addBlock("foo");
    expect(bc.isValidChain(bc2)).toBe(true);
  });

  it("validate an invalid chain has corrupt genesis block", () => {
    bc2.chain[0].data = "wrong data";
    expect(bc.isValidChain(bc2)).toBe(false);
  });

  it("validates an invalid chain has corrupt block", () => {
    bc2.addBlock("foo");
    bc2.chain[1].data = "not foo"
    expect(bc.isValidChain(bc2)).toBe(false);
  });

  it("replace a valid chain", () => {
    bc2.addBlock("foo");
    bc.replaceChain(bc2);
    expect(bc.chain[1].data).toBe("foo");
  });

  it("replace by a shorter chain", () => {
    bc.addBlock("foo");
    bc.replaceChain(bc2);
    expect(bc2.length).toBe(1);
    expect(bc.length).toBe(2);
    expect(bc.chain[1].data).toBe("foo");
  })
})
