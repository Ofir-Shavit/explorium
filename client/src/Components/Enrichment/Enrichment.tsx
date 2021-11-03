import {useCallback, useState} from 'react';
import {Button, IconButton, Snackbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {enrichment} from '../../APIs';
import {IData} from '../../App';

interface IEnrichment {
    data: IData;
    setData: (data: IData | null) => void;
    setEnriched: () => void;
}

export default function Enrichment({data, setData, setEnriched}: IEnrichment) {

    const [error, setError] = useState<boolean>(false);

    const enrichData = useCallback(async () => {
        try {
            const enrichedData = await enrichment.enrichData(data);
            setData(enrichedData);
            setEnriched();
        } catch (e) {
            setError(true);
        }
    }, [data, setData]);

    return (
        <>
            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => setError(false)}
                message="Error Enriching. Please try again later."
                action={<IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setError(false)}
                >
                    <CloseIcon fontSize="small"/>
                </IconButton>}
            />
            <Button variant="outlined"
                    color="inherit"
                    size="medium"
                    onClick={enrichData}>Enrich Data</Button>
        </>
    );
}