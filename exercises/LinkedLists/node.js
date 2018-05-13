class Node {

  constructor(d, next) {
    this.data = d
    this.next = next || null
    return this
  }

  appendToTail(d) {
    let h = this
    while (h.next !== null) h = h.next;
    h.next = new Node(d)
    return
  }
}

module.exports = Node
