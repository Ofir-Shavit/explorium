import {Router} from 'express';
import ExtendedError from '../error';
import enrichData from './service';

const router = Router();

router.post('/enrich', async (req, res) => {
    const {data} = req.body;
    try {
        if (!data.rows || !data.columns) {
            throw new ExtendedError('BadRequestError', 'Please provide rows and columns!', 400);
        }
        const enrichedData = await enrichData(data);
        res.json(enrichedData);
    } catch (error) {
        console.log(error);
        if (error instanceof ExtendedError) {
            res.status(error.statusCode).send(error.message);
        } else {
            res.status(500).send('Internal server error!');
        }
    }
});

export default router;