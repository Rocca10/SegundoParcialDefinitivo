const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo');
});

router.get('/test', (req, res) => {
    const data = [{
        "name": "Nicolas",
        "age": "28"
    },
    {
        "name": "Fabrizio",
        "age":"29"
    }
    ]

    res.json(data);
})

router.get('/hola', (req, res) => {
    res.json({
        "Title": "Hello World",
        "Year": "1995"
    });
})

module.exports = router;