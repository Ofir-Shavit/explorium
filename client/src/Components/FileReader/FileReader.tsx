import CSVReader from 'react-csv-reader';
import {parseData} from './utils';
import './fileReader.css';
import {IData} from '../../App';

interface IFileReader {
    setData: (data: IData | null) => void;
    resetEnriched?: () => void;
}

export default function FileReader({setData, resetEnriched}: IFileReader) {
    return (
        <CSVReader
            cssClass="file-reader"
            inputStyle={{
                fontFamily: ''
            }}
            onFileLoaded={(data, fileInfo, originalFile) => {
                const parsedData = parseData(data);
                setData(parsedData);
                if (resetEnriched) {
                    resetEnriched();
                }
            }}/>
    );
}