import express from "express";
import { Koder } from "../models/koders.model.js";

const router = express.Router();

router.get("/koders", async (request, response) => {
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

router.post("/koders", async (request, response) => {
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

router.patch("/koders/:id", async (request, response) => {
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

router.delete("/koders/:id", async (request, response) => {
    try {

        const { id } = request.params
        const koderDeleted = await Koder.findByIdAndDelete(id)
        response.json({
            success: true,
            data: {
                data: koderDeleted
            }
        })
        
    } catch (error) {
        response
            .status(404)
            .json({
                success: false,
                message: {
                    message: error
                }
            })
    }
})
export default router;