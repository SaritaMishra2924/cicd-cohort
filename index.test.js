const request = require('supertest');

const app = require('./index');

describe('Express routes', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('GET / returns a greeting', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  test('GET /:input returns the input parameter', async () => {
    const response = await request(app).get('/chai');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('You said: chai');
  });

  test('GET /crash sends a message and exits with code 1', async () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

    const response = await request(app).get('/crash');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Server will crash now!');
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});