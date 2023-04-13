export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else throw new Error('Character already exists!');
  }

  addAll(...characters) {
    for (const iterator of characters) {
      this.members.add(iterator);
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    for (const memb of this.members.keys()) {
      yield memb;
    }
  }
}
