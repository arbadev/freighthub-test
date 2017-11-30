/**
 * first
 */
console.log('First')

const a = [2, 4, 6, 8, 9, 15]

const b = []

a.map((item) => {
  a.length >= item ? b.push(Math.pow(2, item).toString()) : null
})
console.log(b)

/**
 * Second
 */
console.log('Second')

let requests = [
  {requestId: 'poiax',  startedAt: 1489744808, ttl: 8},
  {requestId: 'kdfhd',  startedAt: 1489744803, ttl: 3},
  {requestId: 'uqwyet', startedAt: 1489744806, ttl: 12},
  {requestId: 'qewaz',  startedAt: 1489744810, ttl: 1},
]

let max = 0
let result = 0
let min = requests[0].startedAt
const cumulativeTtl = 15

requests.map((request) => {
  max = ((request.startedAt + request.ttl) > max) ? (request.startedAt + request.ttl) : max
  min = (request.startedAt < min) ? request.startedAt : min
})

result = (max - min)

console.log('equal cumulativeTtl ?', result === cumulativeTtl)

/**
 * Third
 */
console.log('Third')
const toInt = (i) => parseInt(i)
const eq = (a, b) => a === b
const getOcurrences = (element, array) => array.filter((item) => eq(element, item)).length


const verifyTtriangle = (elements) => {
  if (elements.length !== 3) return false
  const [a, b, c] = elements
  return (((a + b) > c) && ((a + c) > b) && ((b + c) > a))
}

const verifySquare = (elements) => {
  if (elements.length !== 4) return false
  const [first] = elements
  return elements.reduce((p, c) => !p ? p : (c === first))
}

const verifyRectangle = (elements) => {
  if (elements.length != 4) return false
  const unique = Array.from(new Set(elements))
  const [first, second] = unique
  const firstOcurrences = getOcurrences(first, elements)
  const secondOcurrences = getOcurrences(second, elements)
  return (eq(unique.length, 2) && eq(firstOcurrences, secondOcurrences))
}


const scuareElements = ['2', '2', '2', '2']
const triangleElements = ['2', '2', '2']
const rectangleElements = ['1', '1', '2', '2']

console.log('is square ? ', verifySquare(scuareElements.map(toInt)))
console.log('is triangle ? ', verifyTtriangle(triangleElements.map(toInt)))
console.log('is rectangle ? ', verifyRectangle(rectangleElements.map(toInt)))
