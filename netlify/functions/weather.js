export async function handler(event) {
  const apiKey = process.env.WEATHERAPI_KEY
  const location = event.queryStringParameters?.location

  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Weather API key not configured' }) }
  }
  if (!location) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing location parameter' }) }
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=no`
    )
    const data = await response.json()

    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  } catch (error) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to fetch weather data' }) }
  }
}
