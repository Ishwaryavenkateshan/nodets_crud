import app from "../server";
import request from 'supertest';

  let tokenvalue = ""
  let userid = ""
describe("POST /-simple post api endpoint", () => {
  it('for post the user', async () => {
  const response = await request(app).post('/user').send(
  {
    "userId":23,
    "Name":'ishu',
    "mobileNumber":2133345555
  })
  console.log("-->>>>",response.body)
  tokenvalue=response.body.token
  userid=response.body.users._id
  expect(response.status).toEqual(200);
  })
  it('if fails in Post call', async () =>{
    const response = await request(app).post('/user').send(
      {
        "userId":23,
        "mobileNumber":2133345555
      })
      expect(response.status).toEqual(500);
      })
  })

describe("GETALL /-simple get api endpoint", () => {
  it('to get the user', async () => {
    const value  = await request(app).get('/user').set('auth',tokenvalue)
    expect(value.status).toEqual(200);
  })
})

describe("UPDATE /-  update ", () => {
  it('update user by id', async () => {
    const value  = await request(app).put('/user/'+userid).set('auth',tokenvalue)
    .send({
    "userId":23,
    "Name":'anitha',
    "mobileNumber":2133345555
    })
    expect(value.status).toEqual(200)
  })
})
describe("GET /-  get ", () => {
  it('get user by id', async () => {
    const value  = await request(app).get('/user/'+userid).set('auth',tokenvalue)
    expect(value.status).toEqual(200)
  console.log("-->>>>",value.body)

  })
})


describe("DELETE /-  delete ", () => {
  it('delete user by id', async () => {
    const value  = await request(app).delete('/user/'+userid).set('auth',tokenvalue)
    expect(value.status).toEqual(200)
  })
})



