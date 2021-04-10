import axios from 'axios';

const kitsuHeaders = {
  Accept: 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
};

const instance = axios.create({
  baseURL: 'https://kitsu.io/api/edge/anime',
  headers: kitsuHeaders,
});

export default instance;
