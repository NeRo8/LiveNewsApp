import config from '../etc/config';

export async function getBusinnesNewsFromApi() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
        config.apiKey
      }`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
