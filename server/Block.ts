const SHA256 = require('crypto-js/sha256');

export class Block {
  constructor(private _timestamp: number, private _prevHash: String,
    private _hash: String, private _data: String) { }

  public toString() {
    return `Block -
    Timestamp: ${this._timestamp}
    Previous hash: ${this._prevHash}
    Hash: ${this._hash}
    Data: ${this._data}
    `
  }

  get timeStamp(): number {
    return this._timestamp;
  }
  get data(): String {
    return this._data;
  }
  get prevHash(): String {
    return this._prevHash;
  }
  get hash(): String {
    return this._hash;
  }

  set data(dt: String) {
    this._data = dt;
  }

  /**
   * Generate the first block of a chain
   */
  static genesis(): Block {
    return new this(-1, null, "My initial hash", null);
  }

  static mineBlock(lastBlock: Block, data: String): Block {
    const timestamp = Date.now();
    const hash = Block.hash(timestamp, lastBlock._hash, data);
    return new this(timestamp, lastBlock._hash, hash, data);
  }

  static hash(timestamp: number, prevHash: String, data: String): String {
    return SHA256(`${timestamp}${prevHash}${data}`).toString();
  }

  static blockHash(block: Block): String {
    const { _timestamp, _prevHash, _data } = block;
    return Block.hash(_timestamp, _prevHash, _data);
  }
}