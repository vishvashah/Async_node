const util = require('util')
const async = require('async')

const numbers = [
  1, 2, 3, 4, 5
]

mapLimitAsync = util.promisify(async.mapLimit)

async function main () {
  return await mapLimitAsync(numbers, 2, (number, done) => {
    setTimeout(function () {
      done(null, number * 2)
    }, 1000)
  })
}

main()
  .then(console.log)
  .catch(console.error)