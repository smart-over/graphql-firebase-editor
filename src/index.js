var fs = require('fs');
const graphqlEditor = async function (req, res, next){
    fs.readFile(__dirname + '/graphi.html', 'utf8', (err, text) => {
        text = text.replace('FIREBASE_KEY', process.env.FIREBASE_KEY)
        text = text.replace('APP_NAME', process.env.APP_NAME || 'GraphQL Editor')
        res.send(text);
    })
}
module.exports = graphqlEditor