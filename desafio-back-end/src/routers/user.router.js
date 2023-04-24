import express, { Router } from "express"
import { createUser, getUsers, getUserById, updateUserById, deleteUserById } from "../usecase/koder.usecase.js"

const router = express.Router()

router.get("/", async (request,response)=>{
    
    try {
        const { age, gender, name, lastName, isGraduated, generation } = request.query
    
        let filters = {}
    
        if (age) filters = {...filters, age}
    
        if (generation) filters = {...filters, generation}
    
        if (gender) filters = {...filters, gender}
    
        if (name) filters = {...filters, name}
    
        if (lastName) filters = {...filters, lastName}
    
        if (isGraduated) filters = {...filters, isGraduated}
    
        const allUsers = await getKoders(filters)

        response.json({
            success: true,
            data: {
                data: allUsers
            }
        })
        
    } catch (error) {
        response
        .status(404)
        .json({
            success: false,
            message: {
                message: ("No te salio, mano.", error.message)
            }
        })
        
        
    }

})

router.get("/:id", async (request, response)=>{
    try {
        const { id } = request.params
        const userFound = await getUserById(id)

        response.json({
            success: true,
            data: {
                data: userFound
            }
        })
        
    } catch (error) {
        response.json({
            success: false,
            message:{
                message: ("No te salio, mano.", error.message)
            }
        })
        
    }
})


router.post("/", async (request,response)=>{

try {
    const newUser = request.body

    const userCreated = await createUser(newUser)
    
    response.json({
        success: true,
        data:{
            data: userCreated
        }
    })
    
} catch (error) {
    response.status(404)
    .json({
        success: false,
        message: "Error at Create koder"
    })
}
})

router.patch("/:id", async (request, response)=>{

    try {
        const { id } = request.params
        const newData = request.body
        const updatedUser = await updateUserById(id, newData)

        response.json({
            success: true,
            data: {
                data: updatedUser
            }
        })

        
    } catch (error) {
        response.json({
            success: false,
            message: "Error al actualizar koder."
        })
    }
})

router.delete("/:id", async (request, response)=>{

    try {
        const { id } = request.params
        const deleteUser = await deleteUserById(id)

        response.json({
            success: true,
            data:{
                data: deletedUser
            }
        })
        
    } catch (error) {
        response.json({
            success: false,
            message: "Error al eliminar koder."
        })
        
    }
})



export default router