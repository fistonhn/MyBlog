import express from 'express';
import { verifyAuthToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';
import validateCommentCreated from '../middleware/commentInputValidation';
import { createComment, getAllComments, getAllCommentsNewsTitle, getAllUnPublishComments, getOneComment, updateComment, deleteComment } from '../controller/comments';

const router = express.Router();

router.post('/comment', [validateCommentCreated], createComment);
router.get('/comments', getAllComments);
router.get('/comments/unpublished', [verifyAuthToken], getAllUnPublishComments);
router.get('/comments/newsId', getAllCommentsNewsTitle);
router.get('/comment/:id', [validateParams, verifyAuthToken], getOneComment);
router.patch('/comment/:id', [validateParams, verifyAuthToken], updateComment);
router.delete('/comment/:id', [validateParams, verifyAuthToken], deleteComment);

export default router;
