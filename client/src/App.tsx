import {useEffect, useState} from 'react';
import {DataTable, FileReader, Enrichment} from './Components';
import logo from './Assets/explorium-logo.svg';
import './App.css';

export interface IData {
    columns: string[];
    rows: any[];
}

function App() {

    const [data, setData] = useState<IData | null>();
    const [enriched, setEnriched] = useState<boolean>(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo"/>
                {data &&
                <div>
                    <FileReader setData={setData}/>
                    {!enriched && <Enrichment
                        data={data}
                        setData={setData}
                        setEnriched={() => setEnriched(true)}
                    />}
                </div>}
            </header>
            <div className="App-container">
                {!data ?
                    <FileReader
                        setData={setData}
                        resetEnriched={() => setEnriched(false)}
                    /> :
                    <DataTable data={data}/>
                }
            </div>
        </div>
    );
}

export default App;
