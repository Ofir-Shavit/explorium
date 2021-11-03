import axios from 'axios';
import config from '../config';
import {IData} from '../App';

async function enrichData(data: IData) {

    const response = await axios.post(`http://${config.api}/api/enrich`, {data});

    return response.data;
}

export default {enrichData};
