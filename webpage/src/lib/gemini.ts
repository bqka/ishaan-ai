// Client-side functions for handling Gemini API requests via our backend

export async function summarizeText(text: string): Promise<string> {
  try {
    const response = await fetch("/api/gemini/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw error;
  }
}

export async function simplifyText(text: string): Promise<string> {
  try {
    const response = await fetch("/api/gemini/simplify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.simplifiedText;
  } catch (error) {
    console.error("Error simplifying text:", error);
    throw error;
  }
}

export async function correctGrammar(text: string): Promise<string> {
  try {
    const response = await fetch("/api/gemini/correct-grammar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.correctedText;
  } catch (error) {
    console.error("Error correcting grammar:", error);
    throw error;
  }
}

export async function translateText(
  text: string,
  sourceLanguage: string,
  targetLanguage: string,
): Promise<string> {
  try {
    const response = await fetch("/api/gemini/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, sourceLanguage, targetLanguage }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    throw error;
  }
}

export async function getChatResponse(message: string): Promise<string> {
  try {
    const response = await fetch("/api/gemini/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error getting chat response:", error);
    throw error;
  }
}

export async function getSuggestedResponses(
  context: string,
): Promise<string[]> {
  try {
    const response = await fetch("/api/gemini/suggested-responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ context }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.suggestions;
  } catch (error) {
    console.error("Error getting suggested responses:", error);
    // Return default suggestions on error
    return [
      "Can you explain this simpler?",
      "What does this word mean?",
      "Help me write a response",
      "Summarize this conversation",
    ];
  }
}
