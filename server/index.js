import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express(); //express server oluşturduk

dotenv.config(); //env içeriklerini process.env objesinin içerisine yükler

app.use(bodyParser.json({ limit: "30mb", extended: true }));
//json formatında gelen veriyi kabul et, yüksek boyutlu dosyalar için limit veriyoruz. (max 50MB, default 100KB), extended bazı error mesajları almamak için
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); //cors paketi aktif hale getirdik

app.get("/", (req, res) => {
  //ilk / endpointine gelindiğinde request(istek) ve response(cevap)
  res.json({
    author: "ynsemrsgt",
    message: "server",
  });
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000; //environment'ta tanımlı Port'u kullan ya da 5000. Port'u kullan

mongoose
  .connect(process.env.CONNECTION_URL, {
    //mongoDB bağlantısı sağladık
    useNewUrlParser: true,
    useUnifiedTopology: true, // herhangi bir hata almamak için bunları kullanıyoruz
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
