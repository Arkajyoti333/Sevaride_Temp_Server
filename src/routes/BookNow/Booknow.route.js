import express from 'express';
import BookNowData from '../../controller/BookNow.Controller.js';

const BookNowRouter = express.Router();


BookNowRouter.post('/', BookNowData);

export default BookNowRouter;
