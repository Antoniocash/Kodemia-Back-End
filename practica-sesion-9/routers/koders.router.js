import express from "express";
import { Koder } from "../models/koders.model.js";

const router = express.Router();

router.use((request, response, next)=>{
    console.log("Request en Koders Router")
    next()
})

const middleWareGetKoders = (request, response, next) => {
    console.log("GET /koders , middleware a nivel Endpoint.")
    next()
}

const middleWarePostKoders = (request, response, next) => {
  console.log("POST /koders , middleware a nivel Endpoint.")
  next()
}

const middleWarePatchKoders = (request, response, next) => {
  console.log("PATCH /koders , middleware a nivel Endpoint.")
  next()
}

const middleWareDeleteKoders = (request, response, next) => {
  console.log("DELETE /koders , middleware a nivel Endpoint.")
  next()
}

router.get("/", middleWareGetKoders, async (request, response) => {
  try {
    const allKoders = await Koder.find({});
    response.json({
      success: true,
      data: {
        koders: allKoders,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: {
        message: ("Hubo un error", error),
      },
    });
  }
});

router.post("/", middleWarePostKoders, async (request, response) => {
  try {
    const newKoder = request.body;
    console.log({ newKoder });

    const koderCreated = await Koder.create(newKoder);
    console.log({ koderCreated });

    response.status(201).json({
      success: true,
      data: {
        data: koderCreated,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", middleWarePatchKoders, async (request, response) => {
  try {
    const { id } = request.params;
    const newData = request.body;

    const updatedKoder = await Koder.findByIdAndUpdate(id, newData, {
      new: true,
    });

    response.json({
      success: true,
      data: {
        data: updatedKoder,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: {
        message: ("Hubo un error", error),
      },
    });
  }
});

router.delete("/:id", middleWareDeleteKoders, async (request, response) => {
  try {
    const { id } = request.params;
    const koderDeleted = await Koder.findByIdAndDelete(id);
    response.json({
      success: true,
      data: {
        data: koderDeleted,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: {
        message: error,
      },
    });
  }
});
export default router;
