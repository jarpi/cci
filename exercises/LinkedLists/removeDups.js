const node = require('./node.js')

const tree = new node(1, new node(2, new node(3, new node(1))))

const removeDuplicates = tree => {
  const currentElems = [tree.data]
  let newTree = new node(tree.data)
  let n = tree.next
  while (n.next) {
    if (currentElems.indexOf(n.data) === -1) {
      currentElems.push(n.data)
      newTree.appendToTail(n.data)
    }
    n = n.next
  }
  return newTree
}

console.dir(removeDuplicates(tree))


