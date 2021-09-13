import express from 'express';
import { verifyAuthToken, verifyAdminToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';
import { validateNewsCreated } from '../middleware/newsInputValidation';
import { createNews, getAllNews, getAllUnPublishNews, getOneNews, updateNews, deleteNews, getAllRelatedCategoryNews, getMainByCategory,
  getNyamukuruNews, getNyamukuruMainNews, getSportNews, getSportMainNews, getUtuntuNutundiNews, getUtuntuNutundiMainNews, getAllNewsWithSameTopic,
  getUtuntuNutundiNewsMostViews, bestNews, udushya, uploadingImage, patchUnpublishedOneNews, getUnPublishedOneNews } from '../controller/news';
import upload from '../middleware/upload';

const router = express.Router();

router.post('/upload', [upload], uploadingImage);
router.post('/news', [verifyAuthToken, upload, validateNewsCreated], createNews);

router.get('/articles/AllNews', getAllNews);
router.get('/news/unpublished', getAllUnPublishNews);
router.get('/news/:id', [validateParams], getOneNews);
router.get('/news/unpublished/:id', [validateParams, verifyAuthToken], getUnPublishedOneNews);

router.patch('/news/unpublished/:id', [validateParams, verifyAuthToken], patchUnpublishedOneNews);
router.patch('/news/:id', [validateParams, verifyAuthToken], updateNews);
router.delete('/news/:id', [validateParams, verifyAdminToken], deleteNews);

// nyamukuru news
router.get('/articles/inkuruNyamukuru1', getNyamukuruMainNews);
router.get('/articles/inkuruNyamukuru8', getNyamukuruNews);

// sport news
router.get('/articles/sport1', getSportMainNews);
router.get('/articles/sport5', getSportNews);

// utuntuNutundi news
router.get('/articles/utuntuNutundi1', getUtuntuNutundiMainNews);
router.get('/articles/utuntuNutundiMostViews6', getUtuntuNutundiNewsMostViews);
router.get('/articles/utuntuNutundi3', getUtuntuNutundiNews);

// best news & udushya
router.get('/articles/bestNews6', bestNews);
router.get('/articles/udushya5', udushya);

// get by category
router.get('/articles/category', getAllRelatedCategoryNews);
router.get('/articles/category/main', getMainByCategory);

// get by topic
router.get('/articles/topic', getAllNewsWithSameTopic);

export default router;
