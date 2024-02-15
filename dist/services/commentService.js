"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentsByPostId = void 0;
const prismaClientInitializer_1 = __importDefault(require("../utils/prismaClientInitializer"));
const getCommentsByPostId = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.comment.findMany({
        where: { postId },
    });
});
exports.getCommentsByPostId = getCommentsByPostId;
const createComment = (postId, content) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.comment.create({
        data: { postId, content },
    });
});
exports.createComment = createComment;
const updateComment = (commentId, content) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.comment.update({
        where: { id: commentId },
        data: { content },
    });
});
exports.updateComment = updateComment;
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.comment.delete({
        where: { id: commentId },
    });
});
exports.deleteComment = deleteComment;
