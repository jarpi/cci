const node = require('./node.js')

const tree = new node(1, new node(2, new node(3, new node(1))))

const getKthNode = k => {
  let n = tree
	for (let i=0; i<k && n.next;n=n.next,i++);
	let newTree = new node(n.data)
	n = n.next
  while (n) {
		newTree.appendToTail(n.data)
		n = n.next
  }
  return newTree
}

console.dir(getKthNode(1))
