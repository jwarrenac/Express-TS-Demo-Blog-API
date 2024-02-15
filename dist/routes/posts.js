"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const commentController_1 = require("../controllers/commentController");
const router = express_1.default.Router();
router.get('/', postController_1.getAllPosts);
router.get('/:id', postController_1.getPostById);
router.post('/', postController_1.createPost);
router.put('/:id', postController_1.updatePost);
router.delete('/:id', postController_1.deletePost);
router.get('/:postId/comments', commentController_1.getCommentsByPostId);
router.post('/:postId/comments', commentController_1.createComment);
exports.default = router;
