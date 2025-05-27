import jwt from "jsonwebtoken";
import Joi from "joi";

const generateAuthToken = async function(user){
    let token = jwt.sign( {id: user.id, role: user.role, email: user.email}, process.env.jwtAuthToken)
    return token;
}

const createValidation = (user)=>{
    const userValidateSchema = Joi.object({
        name: Joi.string().required().min(2).max(50),
        email: Joi.string().required().lowercase(),
        password: Joi.string().required().min(6),
        role: Joi.string().default("user")
    });
    return userValidateSchema.validate(user);
}

const authValidate = (req)=>{
    const userValidateSchema = Joi.object({
        email: Joi.string().required().min(4).max(35),
        password: Joi.string().required().min(6)
    });
    return userValidateSchema.validate(req);
}

export {
    generateAuthToken,
    createValidation,
    authValidate,
}