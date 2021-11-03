import axios from 'axios';
import {locationsToBoundingBox, parseXMLResponse} from './utils';
import ExtendedError from '../error';

interface Data {
    columns: string[];
    rows: any[];
}

export default async function enrichData({rows, columns}: Data) {
    const requests = rows.map(async row => {
            const {Latitude, Longitude} = row;
            const parametersExists = Latitude !== undefined && Longitude !== undefined;
            if (!parametersExists) {
                return row;
            }

            const box = locationsToBoundingBox(Latitude, Longitude);
            try {
                const response = await axios.get(`http://www.overpass-api.de/api/xapi?*[amenity=*][bbox=${box}]`);
                return Object.assign(row, {schoolsInArea: parseXMLResponse(response.data)});
            } catch (error) {
                console.log(error);
                throw new ExtendedError('ApiError', 'Error fetching from api', 502);
            }
        }
    );

    const enrichedData = await Promise.all(requests);
    columns.push('schoolsInArea');

    return {columns, rows: enrichedData};
}