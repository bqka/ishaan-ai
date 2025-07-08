// src/lib/api.ts

// Determine the base URL depending on the environment
const baseUrl =
  typeof window === "undefined"
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`  // SSR on Vercel
      : ''
    : ''; // client-side in dev or prod

export async function summarizeText(text: string): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error('Error summarizing text:', error);
    throw error;
  }
}

export async function simplifyText(text: string): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/simplify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.simplifiedText;
  } catch (error) {
    console.error('Error simplifying text:', error);
    throw error;
  }
}

export async function correctGrammar(text: string): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/correct-grammar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.correctedText;
  } catch (error) {
    console.error('Error correcting grammar:', error);
    throw error;
  }
}

export async function translateText(text: string, sourceLanguage: string, targetLanguage: string): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, sourceLanguage, targetLanguage }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
}

export async function getChatResponse(message: string): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
}

export async function getSuggestedResponses(context: string): Promise<string[]> {
  try {
    const response = await fetch(`${baseUrl}/api/suggested-responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ context }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.suggestions;
  } catch (error) {
    console.error('Error getting suggested responses:', error);
    return ["Can you explain this simpler?", "What does this word mean?", "Help me write a response", "Summarize this conversation"];
  }
}