import {IData} from '../../App';

export function parseData(data: any[]): IData | null {

    if (!data.length) return null;

    const columns = data.shift();
    const results = [];

    while (data.length) {
        const row = data.shift();
        const dataObj: any = {};
        for (let j = 0; j < columns.length; j++) {
            dataObj[columns[j]] = row[j];
        }
        results.push(dataObj);
    }

    return {columns, rows: results};
}