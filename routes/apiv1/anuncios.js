'use strict';

const express = require('express');
const router = express.Router();

const Anuncio= require('../../models/Anuncio');

async function getFilters(req, res, next) {
    try {
        // recogemos parámetros de entrada
        const name = req.query.nombre;
        const sale = req.query.venta;
        const price = req.query.precio;
        const tag = req.query.tag;
        const skip = parseInt(req.query.start);
        const limit = parseInt(req.query.limit);
        const sort = req.query.sort;
        const fields = req.query.fields;
    
    
        const filtro = {};
    
        if (typeof name !== 'undefined') {
            filtro.nombre = name; 
        }

        if (typeof sale !== 'undefined') { 
            filtro.venta = sale; 
        }

        if (typeof tag !== 'undefined') { 
            filtro.tags = tag; 
        }

       
        if (typeof price !== 'undefined') { 
            const parts = price.split('-');
        

            if(parts.length==1){
                filtro.precio = price

            }else{
                const price2 = parts.pop();
                const price1 = parts.pop();
     
                if(price2!='' && price1!=''){
                    filtro.precio = { '$gte': price1, '$lte': price2 }      
                }else{
                    if(price2!=''){
                        filtro.precio = {'$lte': price2} 
                    }
                    if(price1!=''){
                        filtro.precio = {'$gte': price1} 
                    }
                }
            }  
        }
    
    
        const docs = await Anuncio.listar(filtro, skip, limit, sort, fields); // si usamos await, la función donde estoy
        
        res.json({ success: true, result: docs });  
      } catch(err) {
        next(err);
        return;
      }  
}

router.get('/', async(req, res, next)=>{
    try {
        // recogemos parámetros de entrada
        const name = req.query.nombre;
        const sale = req.query.venta;
        const price = req.query.precio;
        const tag = req.query.tag;
        const skip = parseInt(req.query.start);
        const limit = parseInt(req.query.limit);
        const sort = req.query.sort;
        const fields = req.query.fields;
    
    
        const filtro = {};
    
        if (typeof name !== 'undefined') {
            filtro.nombre = name; 
        }

        if (typeof sale !== 'undefined') { 
            filtro.venta = sale; 
        }

        if (typeof tag !== 'undefined') { 
            filtro.tags = tag; 
        }

       
        if (typeof price !== 'undefined') { 
            const parts = price.split('-');
        

            if(parts.length==1){
                filtro.precio = price

            }else{
                const price2 = parts.pop();
                const price1 = parts.pop();
     
                if(price2!='' && price1!=''){
                    filtro.precio = { '$gte': price1, '$lte': price2 }      
                }else{
                    if(price2!=''){
                        filtro.precio = {'$lte': price2} 
                    }
                    if(price1!=''){
                        filtro.precio = {'$gte': price1} 
                    }
                }
            }  
        }
    
    
        const docs = await Anuncio.listar(filtro, skip, limit, sort, fields); // si usamos await, la función donde estoy
        
        res.json({ success: true, result: docs });  
      } catch(err) {
        next(err);
        return;
      }   
});

router.get('/tags', async(req, res, next)=>{
    try {
             
        const docs = await Anuncio.find().distinct('tags').exec();
        
        res.json({ success: true, result: docs });  
      } catch(err) {
        next(err);
        return;
      }   
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