const express = require('express');

const router = express.Router();

router.get('/categorias/:categoryId/productos/:productoId', (req, res) => {
  const { categoryId, productoId } = req.params;
  res.json({
    categoryId,
    productoId,
  });
})
module.exports = router;
