import express from 'express';
import {Router} from 'express';
import { ProductSellController } from './controllers/ProductSellController';
import multer from 'multer';
import { storage } from './multerConfig';

const routes = Router();
const upload = multer({storage: storage});

// rota de vendas
routes.post('/sell', new ProductSellController().create);

// rota de uploads
routes.post('/upload', upload.single('file'), (req, res) => {
    return res.json(req.file?.filename);
})

// fornecendo arquivos ao front
routes.use("/files", express.static("uploads"));


export default routes;