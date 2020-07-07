import request from 'supertest'
import { app } from '../../app'
import { signin } from '../../test/signin.helper'

it('gives the details of the current user',async()=>{
    
    const cookie = await signin()
    const response = await request(app)
                            .get('/api/users/currentuser')
                            .set('Cookie',cookie)
                            .send()
                            .expect(200)
            expect(response.body.currentUser.email).toEqual('test@test.com')
})

it('responds currentuser as null', async ()=>{
   const response  =  request(app)
                        .get('/api/users/currentuser')
                        .send()
                        .expect(200)
                    expect((await response).body.currentUser).toEqual(null)
})