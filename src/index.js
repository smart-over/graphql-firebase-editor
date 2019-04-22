import * as fs from 'fs';
const editor = async (req, res, firebase_key) => {
    fs.readFile(__dirname + '/graphi.html', 'utf8', (err, text) => {
        text = text.replace('FIREBASE_KEY', '')
        res.send(text);
    })
}
module.exports = {
    editor
}