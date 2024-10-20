import { Router } from "express";
import { PostController } from "../controllers/post";
import { debounce } from "../utils/debounce";


const controller = new PostController()
const PostRouter = Router()

PostRouter.post('/posts', controller.create);
PostRouter.get('/posts', controller.readAll);
PostRouter.delete('/posts/:id', controller.delete);
PostRouter.put('/posts/:id', controller.update);
PostRouter.get('/search', debounce(controller.search, 2000));



export {PostRouter}