import express from "express"
import { Koder } from "../models/koders.model.js"

const router = express.Router()

router.get("/koders", async (request, response)=>{

    const allKoders = await Koder.find ({})
    response.json({
        success: true,
        data: {
            koders: allKoders
        }
    })
})

router.post("/", (request, response)=>{

})

export default router