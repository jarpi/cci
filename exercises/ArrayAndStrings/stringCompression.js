// Implement a method to perform basic string compression using the counts
// of repeated characters.

const str = 'aabcccccaaa'

const compress = (str) => {
  if (!str) return ''
  const strArr = str.split('')
  let prev = strArr[0]
  let i = 0
  for (i=0; i<strArr.length && strArr[i] === prev; i++);
  return prev + i + compress(str.slice(i))
}

console.dir(compress(str))
