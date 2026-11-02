const TATOEBA_SENTENCES_URL = 'https://api.tatoeba.org/v1/sentences'

export async function searchTatoebaSentences(word) {
  const params = new URLSearchParams({
    lang: 'spa',
    q: word,
    'trans:lang': 'eng',
    sort: 'relevance',
    limit: '10',
    is_unapproved: 'no',
  })

  let response
  try {
    response = await fetch(`${TATOEBA_SENTENCES_URL}?${params}`)
  } catch {
    throw new Error('Could not connect to Tatoeba. Check your internet connection and try again.')
  }

  if (!response.ok) {
    throw new Error('Tatoeba could not complete the search. Please try again in a moment.')
  }

  let result
  try {
    result = await response.json()
  } catch {
    throw new Error('Tatoeba returned an unexpected response. Please try again later.')
  }

  if (!result || typeof result !== 'object' || !Array.isArray(result.data)) {
    throw new Error('Tatoeba returned an unexpected response. Please try again later.')
  }

  return result.data
}
