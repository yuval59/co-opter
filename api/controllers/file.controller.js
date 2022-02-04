const fs = require('fs')
const path = require('path')

exports.getFiles = async function (req, res, next) {
    const folderPath = path.join(__dirname, req.body.path)

    console.log(`getting files from ${folderPath}`)

    var filesInDir = []
    var foldersInDir = []
    fs.readdir(folderPath, (err, files) => {
        if (!files) return res.status(400)
        files.forEach(file => {
            if (fs.lstatSync(path.resolve(folderPath, file)).isDirectory()) {
                foldersInDir.push(file)
            } else {
                filesInDir.push(file)
            }
        })
        return res.status(200).json({ files: filesInDir, folders: foldersInDir, relativePath: folderPath })
    })
}

exports.getParent = async function (req, res, next) {
    var folderPath = path.join(__dirname, req.body.path)
    folderPath = path.basename(path.dirname(folderPath))

    console.log(`getting files from ${folderPath}`)

    var filesInDir = []
    var foldersInDir = []
    fs.readdir(folderPath, (err, files) => {
        if (!files) return res.status(400)
        files.forEach(file => {
            if (fs.lstatSync(path.resolve(folderPath, file)).isDirectory()) {
                foldersInDir.push(file)
            } else {
                filesInDir.push(file)
            }
        })
        return res.status(200).json({ files: filesInDir, folders: foldersInDir, relativePath: folderPath })
    })
}