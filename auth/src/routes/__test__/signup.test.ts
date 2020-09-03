import request from 'supertest'
import { app } from '../../app'

it('returns a 201 on successful signup',async ()=>{
    return request(app)
     .post('/api/users/signup')
     .send({
         email: 'test@test.com',
         password: 'password'
     })
     .expect(201)
})

it('returns a 400 on invalid email',async ()=>{
    return request(app)
     .post('/api/users/signup')
     .send({
         email: 'snckdjcnld',
         password: 'password'
     })
     .expect(400)
})

it('returns a 400 on invalid password',async ()=>{
    return request(app)
     .post('/api/users/signup')
     .send({
         email: 'test@test.com',
         password: 'p'
     })
     .expect(400)
})

it('returns a 400 with missing email and password',async ()=>{
    return request(app)
     .post('/api/users/signup')
     .send({})
     .expect(400)
})

it('disallows duplicate email and password', async ()=>{
    await request(app)
            .post('/api/users/signup')
            .send({
                email:'test@test.com',
                password: 'password'
            })
            .expect(201)
    await request(app)
            .post('/api/users/signup')
            .send({
                email:'test@test.com',
                password: 'password'
            })
            .expect(400)
})

it('sets a cookie on successful signup', async ()=>{
    const response = await request(app)
                            .post('/api/users/signup')
                            .send({
                                email: 'test@test.com',
                                password: 'password'
                            })
                            .expect(201)
            expect(response.get('Set-Cookie')).toBeDefined()
})