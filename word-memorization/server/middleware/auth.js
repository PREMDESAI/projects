import jwt from 'jsonwebtoken';
import dotEnv from 'dotenv';

dotEnv.config()

export default function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token)
        return res.status(401).send("Token not found");
    try{
        const decoded = jwt.verify(token, process.env.jwtAuthToken);
        console.log(decoded);
        if(!decoded.id ) 
            return res.status(401).json({"error": "The token is invalid"});
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(400).json({error: `The token is invalid: ${err}`});
    }
}


function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}