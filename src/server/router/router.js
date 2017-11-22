import express from 'express';

import reactssrHandler from './reactssrHandler';

const router = express.Router();

const middlewareReactssr = (req, res, next) => {
  res.set({ 'Content-Type': 'text/html' });
  next();
};

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get(reactssrHandler.path, middlewareReactssr, reactssrHandler.handler);

module.exports = router;
