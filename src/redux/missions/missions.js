import httpRequest from './http-request';

const fetchMissions = () => httpRequest.get('/missions');

export default fetchMissions;