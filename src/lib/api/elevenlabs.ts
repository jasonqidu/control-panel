export async function getTranscriptions() {
  const res = await fetch("https://api.elevenlabs.io/v1/transcriptions", {
    headers: {
      "Authorization": `Bearer ${process.env.ELEVENLABS_API_KEY}`
    }
  })
  return res.json()
}