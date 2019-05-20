const request = require('supertest')
const app = require('../server/app')

describe('API crud operations', () => {
  test('GET /explores/:id', async done => {
    try {
      let productId = Math.floor(Math.random() * 100)
      let { body, statusCode } = await request(app).get(`/explores/${productId}`);
      expect(statusCode).toBe(200)
      expect(body[0]).toEqual(
        expect.objectContaining({
          productId: expect.any(Number),
          exploresLists: expect.any(Array),
          videosLists: expect.any(Array),
          articlesLists: expect.any(Array),
          innerCarousel: expect.any(Array)  
        })
      )
      done()
    } catch (err) {
      console.log(err)
    }
  })

})