// Implement an algorithm to determine if a string has all unique chars

const uniqueStr = 'ABC'
const notUniqueStr = 'AABBCC'

// Is unique with data structure
const isUnique = str => {
  const strElems = str.split('').reduce((acc, c) => { if (!acc[c])acc[c] = true; return acc }, {})
  return Object.keys(strElems).length === str.length
}

console.dir(isUnique(uniqueStr))
console.dir(isUnique(notUniqueStr))

// Is unique without data structure
const isUniqueNotDS = str => {
  const strElems = str.split('')
  return strElems.every( (c,i) => {
    return strElems.slice(i+1).indexOf(c) === -1
  })
}

console.dir(isUniqueNotDS(uniqueStr))
console.dir(isUniqueNotDS(notUniqueStr))

