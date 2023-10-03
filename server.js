import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Calculator from './calculation.js';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
    const result = Calculator.performCalculations(...req.body.data);
    res.json({result});
});
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});