let request = require("supertest");

const app = require("../src/app");
const timestamp = require('time-stamp');

/**
 * Testing get all user endpoint
 */


  describe('SUITE DE TEST PARA USUARIOS', function () {
    it('Test para la modificacion de un usuario estatus 200', function () {

      let data = {
        email: "email",
        name: "name",
        rut: "xx.xxx.xxx-x"
      }
      request(app)
        .put('/edit')
        .send(data)
        .expect(200)

    });

    it('Test para la modificacion de un usuariosin llave primaria', function () {

      let data = {
        name: "name",
        rut: "xx.xxx.xxx-x"
      }
      request(app)
        .put('/edit')
        .send(data)
        .expect(500)

    });

    it('Test para la inclucion de un usuario con estatus 200', function () {

      let data = {
        email: timestamp('YYYYMMDDHHmmss'),
        name: "Rdolfito",
        rut: "xx.xxx.xxx-x"
      }
      request(app)
        .post('/insert')
        .send(data)
        .expect(200)

    });

    it('Test para la inclucion de un usuario con llave repetida ', function () {

      let data = {
        email: timestamp('YYYYMMDDHHmmss'),
        name: "Rdolfito",
        rut: "xx.xxx.xxx-x"
      }
      request(app)
        .post('/insert')
        .send(data)
        .expect(500)  
      
    });

    it('Test para la inclucion de un usuario sin llave primaria ', function () {

      let data = {
      
        name: "Rdolfito",
        rut: "xx.xxx.xxx-x"
      }
      request(app)
        .post('/insert')
        .send(data)
        .expect(500)  
      
    });
    
  });








