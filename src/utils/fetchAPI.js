const baseUrl = 'https://randomuser.me/api';

const fetchAPI = (url = '', method = 'GET', headers = {}, body = {}) => {
  fetch(`${baseUrl}/${url}`).then((res) => res.json());
};

export default fetchAPI;
