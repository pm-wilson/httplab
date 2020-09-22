const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('returns status 200 and text with the body', async() => {
    const response = await request(app)
      .post('/echo')
      .send({ body: 'plain text with request body' });

    expect(response.text).toEqual('plain text with request body');
  });

  it('returns red in an h1 html tag', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('returns green in an h1 html tag', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('returns blue in an h1 html tag', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual('<h1>red</h1>');
  });
});
