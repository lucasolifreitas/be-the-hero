const request = require('supertest');
const app = require('../../src/app');
const connecion = require('../../src/database/connection');


describe('ONG', () => {
    beforeEach(async () => {
        await connecion.migrate.rollback();
        await connecion.migrate.latest();
    });

    afterAll(async () =>{
       await connecion.destroy();
    });


    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@gmail.com",
                whatsapp: "1234567890",
                city: "Rio do Sul",
                uf: "SC"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});