const fsPromises = require('fs/promises')

const putNREad = async () => {
  await fsPromises.appendFile('hello.txt', 'coucou\n')
  let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
  console.log(txt1)
}

try {
  putNREad()
} catch (e) {
  console.log(e.message)
}
