import express from 'express';
import { getLibrary, addLibrary } from '../controller/libraryController.js';
const libraryRouter = express.Router();

libraryRouter
.get("/", getLibrary)
.post("/",addLibrary)

export default libraryRouter;