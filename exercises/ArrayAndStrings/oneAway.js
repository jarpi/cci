// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.


const str1 = 'pale'
const str2 = 'ple'

const nDiff = (str1, str2) => {
  if (str1.length !== str2.length + 1) return false
  let nChanges = 0
  str2.split('').forEach(c => {
    if (str1.indexOf(c) === -1) nChanges += 1
  })
  return nChanges < 2
}


console.dir(nDiff(str1, str2))
console.dir(nDiff('pale', 'blr'))
