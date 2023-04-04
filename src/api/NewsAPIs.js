import APImanager from './API_manager';

const getNews = async () => {
  try {
    const result = await APImanager('/bike/getNewsData', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return result;
  } catch (error) {
    return 'Error to fetch API data: ', error.response;
  }
};

export const user_login = async data => {
  try {
    console.log(`data in APIs ${data.uEmail}`);
    const result = await APImanager('/user/loginUser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data,
    });
    console.log(`result at APIs: ${result}`);
    return result;
  } catch (error) {
    return error.response;
  }
};

export const getUserName = async data => {
  try {
    console.log('Data at api', data);
    const result = await APImanager('/user/getUserName', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: data.uToken,
      },
      // authorization: data.uToken,
    });
    console.log('Result at user_api', result);
    return result;
  } catch (error) {
    return error.response;
  }
};

export default getNews;
