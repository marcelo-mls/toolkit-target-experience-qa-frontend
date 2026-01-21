const url = 'https://api-qa-spaces-target.onrender.com';
//const url = 'http://localhost:3001';

export async function fetchSpaceContent(space) {
  const errorMessage = '😬🛠️ Desculpe, um erro inesperado ocorreu. Por favor, tente novamente em alguns instantes.';
  
  try {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    const endpoint = `${url}/space/${space}`;
    const response = await fetch(endpoint, config);
    const data = await response.json();

    if (!response.ok) {
      console.info(response.status);
      return {status: response.status, message: data.message || errorMessage};
    }

    return data;

  } catch (error) {
    console.error(error);
    return {status: 500, message: errorMessage};
  }
}
