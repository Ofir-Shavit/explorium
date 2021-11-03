import app from './application';
import config from './config';

app.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}!`);
});