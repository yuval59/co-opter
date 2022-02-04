const fs = require('fs')

fs.readdirSync('C:').forEach(file => {
    console.log(file)
})