import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({ good: 'deu bom' });
});

export default routes;
