import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Pantalla de Inicio');
});
router.get('/contacto', (req, res) => {
    res.send('Pantalla de Contacto');
});
router.get('/about', (req, res) => {
    res.send('Pantalla de About');
});



export default router;