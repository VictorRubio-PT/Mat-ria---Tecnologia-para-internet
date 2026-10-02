const { router } = require('express');
const router = router();

const vagasMock = [
    {id: 1, title: 'Desenvolvedor Front-end React', empresa: 'Tech Solutions', tipo: 'Remoto'},
    {id: 2, title: 'Desenvolvedor Back-end Node.js', empresa: 'CodeWorks', tipo: 'Híbrido'},
    {id: 3, title: 'Desenvolvedor Full Stack', empresa: 'Inova Digital', tipo: 'Presencial'},
    {id: 4, title: 'Desenvolvedor Mobile Flutter', empresa: 'AppMakers', tipo: 'Remoto'}
]

router.get('/vagas', (req, res) => {
    res.json(vagasMock);
});

module.exports = router;