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

export async function getAllNewsSource(filters) {
  const { country, language, category } = filters;
  try {
    const response = await fetch(
      `https://newsapi.org/v2/sources?&country=${country}&category=${category}&language=${language}&apiKey=${
        config.apiKey
      }`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
