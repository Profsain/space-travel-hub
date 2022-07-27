import axios from 'axios';

const BaseUrl = 'https://api.spacexdata.com/v3/missions';

const httpRequest = axios.create({ baseURL: BaseUrl });

export default httpRequest;