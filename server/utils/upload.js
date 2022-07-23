import multer from "multer";
import dotenv from "dotenv";
dotenv.config();
const username = process.env.DB_username;
const password = process.env.DB_password;

import { GridFsStorage } from "multer-gridfs-storage";
const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@cluster0.1qyrfwk.mongodb.net/?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});
export default multer({storage}); 
