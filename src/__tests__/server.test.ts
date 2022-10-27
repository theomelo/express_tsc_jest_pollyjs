import fetch from 'node-fetch';
import autoSetupPolly from '../__tests__/__config__/polly';

describe('It works', () => {
  const pollyContext = autoSetupPolly();

  beforeEach(() => {
    pollyContext.polly.server
      .get('https://www.google.com')
      .intercept((_, res) => void res.json({ hello: 'world' }) );
  });

  it('Returns ', async () => {
    const response = await fetch('https://www.google.com');
    const data = await response.json();
    expect(JSON.stringify(data)).toBe("{\"hello\":\"world\"}");
  });
});
