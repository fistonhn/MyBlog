import express from 'express';
import { verifyAuthToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';
import { validateNewsCreated, validateNewsInput } from '../middleware/newsInputValidation';
import { createNews, getAllNews, getOneNews, updateNews, deleteNews, getAllRelatedNews } from '../controller/news';
import upload from '../middleware/upload';


const router = express.Router();

router.post('/news', [ upload, verifyAuthToken, validateNewsCreated], createNews);
router.get('/news', getAllNews);
router.get('/news/topic', getAllRelatedNews); 
router.get('/news/:id', [validateParams], getOneNews);
router.patch('/news/:id', [validateParams, verifyAuthToken, validateNewsInput], updateNews);
router.delete('/news/:id', [validateParams, verifyAuthToken], deleteNews);


export default router;
