import fetch from 'node-fetch';
import polly from '../__tests__/__config__/polly';

describe('It works', () => {
  const { server } = polly;

  beforeEach(() => {
    server
      .get('https://www.google.com')
      .intercept((_, res) => void res.json({ hello: 'world' }) );
  });

  it('Returns ', async () => {
    const response = await fetch('https://www.google.com');
    const data = await response.json();
    expect(JSON.stringify(data)).toBe("{\"hello\":\"world\"}");
  });
});
