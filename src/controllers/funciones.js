

"use strict";
var mongoose = require('mongoose');
var User = require('../models/user');

exports.insertar =  async(req, res, next) =>{

    if (typeof req.body != 'undefined') {

        let email = req.body.email;
        let name = req.body.name;
        let rut = req.body.rut;

        if (email == '' || name == '' || rut == '') {
            return res.send('Todos los campos son requeridos');
            
        }
         User.find({ "email": email }, (err, encontrado) => {
           
             if (encontrado != []) {
                 return res.status(500).send('Existe otro usuario con ese email');
                
             } else {
                User.insertMany(req.body, (err, resp) =>{
                    if (err) {
                       
                        res.status(500).send('No se pudo insertar el usuario');
                    } else if (resp) {
                       return res.status(200).json(resp);
                    } 
                });
             }
        });  
    
 
                
    } else {
        return res.status(401).json({ message: 'Se requieren parametros' });
    }
  
}

exports.editar =  (req, res, next)=> {

    if (typeof req.body != 'undefined') {

        let email = req.body.email;
        let name = req.body.name;
        let rut = req.body.rut;

        User.updateOne({ "email": email }, { $set: { "name": name, "rut": rut } } , (err, resp) => {
                    if (err) {
                        res.status(500).send('No se pudo insertar el usuario');
                    } else if (resp) {
                        return res.status(200).json({ message: 'Registro Modificado' } );
                    } 
                });
    } else {
        return res.status(401).json({ message: 'Se requieren parametros' });
    }
}


