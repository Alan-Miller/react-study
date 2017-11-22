require('dotenv').config();
const { PORT, CONNECTION_STRING } = process.env
    , path = require('path')
    , massive = require('massive')
    // , cors = require('cors')
    , express = require('express')
    , api = require('./api')
    , app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

// app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use((req, res, next) => { console.log(req.method, req.url); next(); });

app.use((req, res, next) => {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN'
        // 'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
});

api(app);

const joinedPath = path.join(__dirname, '..', 'build', 'index.html');
console.log('joined path', joinedPath);
console.log('parsed path', path.parse(joinedPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, console.log(`Listening on ${PORT}.`));