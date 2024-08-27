import express from 'express';
import multer from 'multer';
import { validateBase64 } from './utils/validations';
import { handleUpload } from './controllers/uploadController';
import { confirmMeasureValue } from './controllers/confirmController';
import { listMeasures } from './controllers/listController';

const app = express();
const upload = multer();

app.use(express.json());

app.post('/upload', upload.single('image'), async (req, res) => {
  const { imageBase64 } = req.body;
  if (!validateBase64(imageBase64)) {
    return res.status(400).json({ message: 'Invalid base64 data' });
  }
  await handleUpload(imageBase64, res);
});

app.patch('/confirm', confirmMeasureValue);

app.get('/:customerCode/list', listMeasures);

app.listen(3000, () => console.log('Server running on port 3000'));
