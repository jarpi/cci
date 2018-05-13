// Given two strings, write a method to decide if one is a permutation of the other.

const str1 = 'AB'
const str2 = 'BA'
const str3 = 'BAC'
const str4 = 'BAP'

const isStringPermutation = (str1, str2) => {
  if (str1.length !==  str2.length) return false
  const objStr1 = str1.split('').reduce((acc, c) => {acc[c] = true; return acc},{})
  const objStr2 = str2.split('').reduce((acc, c) => {acc[c] = true; return acc},{})
  Object.keys(objStr1).forEach(k => {
    delete objStr1[k]
    delete objStr2[k]
  })
  return Object.keys(objStr1).length === Object.keys(objStr2).length
}

console.dir(isStringPermutation(str1, str2))
console.dir(isStringPermutation(str3, str4))

