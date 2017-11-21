import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/ssr', (req, res) => {
  res.render('pages/ssr');
});


module.exports = router;
