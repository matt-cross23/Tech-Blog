const router = require('express').Router();
const loginRoutes = require('./userRoutes');
const dashRoutes = require('./dashboardRoutes');

router.use('/dashboard', dashRoutes);
router.use('/login', loginRoutes);


module.exports = router