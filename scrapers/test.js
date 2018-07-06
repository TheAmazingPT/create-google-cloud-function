import fetch from 'node-fetch';

export default async function test(request, response) {
  const raw = await fetch('http://icanhazip.com/');
  const text = await raw.text();

  console.log(`TEST #1: ${text}`);

  response.send(text);
}
