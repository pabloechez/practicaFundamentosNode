var express = require('express');
var router = express.Router();

const Anuncio= require('../models/Anuncio');



/* GET home page. */
router.get('/', async (req, res, next)=>{
    
    const docs = await Anuncio.find().exec();

    res.render('pages/index', { title: 'Nodepop',results:docs });
   
});

module.exports = router;




