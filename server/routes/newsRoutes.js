import express from 'express';
import { verifyAuthToken, verifyAdminToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';
import { validateNewsCreated } from '../middleware/newsInputValidation';
import { createNews, getAllNews, getOneNews, updateNews, deleteNews, getAllRelatedNews, getMainByTopic,
    getNyamukuruNews, getNyamukuruMainNews, getSportNews, getSportMainNews, getUtuntuNutundiNews, getUtuntuNutundiMainNews
,getUtuntuNutundiNewsMostViews, bestNews, udushya } from '../controller/news';
import upload from '../middleware/upload';


const router = express.Router();

router.post('/news', [ verifyAuthToken, upload, validateNewsCreated], createNews);
router.get('/news', getAllNews);
router.get('/news/:id', [validateParams], getOneNews);
router.patch('/news/:id', [validateParams, verifyAdminToken], updateNews);
router.delete('/news/:id', [validateParams, verifyAdminToken], deleteNews);

// nyamukuru news
router.get('/articles/nyamukuru/main', getNyamukuruMainNews);
router.get('/articles/nyamukuru', getNyamukuruNews);


// sport news
router.get('/articles/sport/main', getSportMainNews);
router.get('/articles/sport', getSportNews);


// utuntuNutundi news
router.get('/articles/utuntuNutundi/main', getUtuntuNutundiMainNews);
router.get('/articles/utuntuNutundi/views', getUtuntuNutundiNewsMostViews);
router.get('/articles/utuntuNutundi', getUtuntuNutundiNews);


// best news & udushya
router.get('/articles/bestNews', bestNews);
router.get('/articles/udushya', udushya);


// get by topic
router.get('/articles/topic', getAllRelatedNews); 
router.get('/articles/topic/main', getMainByTopic); 


export default router;
