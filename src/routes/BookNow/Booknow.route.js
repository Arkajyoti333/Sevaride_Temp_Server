import express from 'express';
import {BookNowData,BookNowDataDriver,singleBookdata} from '../../controller/BookNow.Controller.js';

const BookNowRouter = express.Router();


BookNowRouter.post('/', BookNowData);
BookNowRouter.get('/BookNowDataDriver', BookNowDataDriver);//get all booking data
BookNowRouter.get('/BookNowDataDriver/:id',singleBookdata)


export default BookNowRouter;
