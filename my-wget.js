const fsPromises = require('fs/promises')
const axios = require('axios')

// check if command line is good
if (process.argv.length !== 3) {
  console.error('Veuillez ne mettre que l\'url en parametre ')
} else if (!process.argv[2].startsWith('https://')) {
  console.error('Nous vouloir url en parametre')
}

const getHTML = async (address) => {
    try {
    const response = await axios.get(address)
    await fsPromises.writeFile('index.html', response.data)
    const stats = await fsPromises.stat('index.html')
    console.log(`"index.html" size : ${stats.size} bytes`)
    } catch (e) {
    console.log(e.message)
  }
}

getHTML(process.argv[2])