import multer from 'multer';
import path from 'path';

// função que diz onde salvar os arquivo os arquivos de upload
// validação do que recebemos do front, para não haver problema com arquivo ex: conflito de nomes
export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('uploads'));
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();

        callback(null, `${time}_${file.originalname}`)
    }
})