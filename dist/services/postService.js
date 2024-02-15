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
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const prismaClientInitializer_1 = __importDefault(require("../utils/prismaClientInitializer"));
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.post.findMany();
});
exports.getAllPosts = getAllPosts;
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.post.findUnique({
        where: { id },
    });
});
exports.getPostById = getPostById;
const createPost = (title, content) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.post.create({
        data: { title, content },
    });
});
exports.createPost = createPost;
const updatePost = (id, title, content) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.post.update({
        where: { id },
        data: { title, content },
    });
});
exports.updatePost = updatePost;
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClientInitializer_1.default.post.delete({
        where: { id },
    });
});
exports.deletePost = deletePost;
