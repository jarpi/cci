const node = require('./node.js')

const tree = new node(1, new node(2, new node(3, new node(1))))
const treee = new node(1, new node(3, new node(2, new node(1))))

const isPalindrome = (tree1, tree2) => {
  const t1Arr = getArr(tree1)
  const t2Arr = getArr(tree2).reverse()
  if (t1Arr.length !== t2Arr.length) return false
  let i = 0
  for (; i<t1Arr.length && t1Arr[i] === t2Arr[i]; i++);
  return t1Arr.length === i ? true : false
}

const getArr = tree => {
  return tree.next ? [tree.data].concat(getArr(tree.next)) : tree.data
}

console.dir(isPalindrome(tree, treee))
