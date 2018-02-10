'use strict';

const express = require('express');
const router = express.Router();

const Anuncio= require('../../models/Anuncio');

router.get('/', async (req, res, next)=>{
    /*Agente.find().exec((err,docs)=>{
        if(err){
            next(err);
            return;
        }
        // si no ha habido error
        res.json({success: true, result: docs});
    });*/

    const docs = await Anuncio.find().exec();
    res.json({success: true, result: docs});
});

router.post('/',(req, res, next)=>{

    console.log(req.body);

    const data= req.body;

    // creamos documento de agente en memoria
    const agente = new Agente(data);

    // lo persistimos en la base de datos
    agente.save((err,agenteGuardado)=>{
        if(err){
            next(err);
            return;
        }
        res.json({succes:true, result: agenteGuardado})
    });

});

module.exports = router;