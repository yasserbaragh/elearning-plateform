export const api = 'http://localhost:8080/api'
export const authApi = 'http://localhost:8080'

export async function fetchNoCache(url) {
    const res = await fetch(`${api}${url}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
  
    return res.json();
  }

export const cloudName = 'dugltg4qz';