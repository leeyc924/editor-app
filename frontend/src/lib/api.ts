import axios from 'axios';
import produce from 'immer';

const developmentUrl = 'http://localhost:8005';
const productionUrl = ''; //todo product url 설정

export const fetchEditorApi = async (url: string, data: any, options:any = {}) => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    data = produce(data, (draft: any) => {
      draft.accessToken = accessToken;
    });

    let apiUrl = '';
    if (process.env.NODE_ENV !== 'production') {
      apiUrl = developmentUrl;
    } else {
      apiUrl = productionUrl;
    }

    const response = await axios({
      method: 'post',
      url: apiUrl + url,
      headers: {
        // 'X-Api-Key': '',
        'content-type': 'application/json',
        ...options.headers,
      },
      data: data,
    }).catch(err => {
      if (err.response.status === 401) {
        window.location.href = '/auth/login';
      } else {
        throw err;
      }
    });

    if (response) {
      if (response.status === 200) {
        return response.data;
      } else {
        throw Object.assign(new Error('api error'), {
          status: response.status,
        });
      }
    } else {
      throw new Error('api error');
    }
  } catch (err) {
    throw err;
  }
};