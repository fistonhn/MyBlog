import express from 'express';
import { verifyAuthToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';
import validateTopicCreated from '../middleware/topicInputValidation';
import { createTopic, getAllActiveTopics, getAllInactiveTopics, getOneTopic, updateTopic, deleteTopic } from '../controller/topics';

const router = express.Router();

router.post('/topic', [verifyAuthToken, validateTopicCreated], createTopic);
router.get('/topics/active', [verifyAuthToken], getAllActiveTopics);
router.get('/topics/inactive', [verifyAuthToken], getAllInactiveTopics);
router.get('/topic/:id', [validateParams, verifyAuthToken], getOneTopic);
router.patch('/topic/:id', [validateParams, verifyAuthToken], updateTopic);
router.delete('/topic/:id', [validateParams, verifyAuthToken], deleteTopic);

export default router;
