// URLify: Write a method to replace all spaces in a string with '%20'


const str = 'Mr John Smith'
const str2 = 'John'

const urlify = str => {
  return str.split('').map(c => {
    return c.charCodeAt(0) === 32 ? '%20' : c
  }).join('')
}

console.dir(urlify(str))
console.dir(urlify(str2))
