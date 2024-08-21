import jwt from 'jsonwebtoken';

const generateToken = (data: any): string => {
    return jwt.sign(data, "SECURITY_INFORMATION_FOR_SESSION", { expiresIn: "7d" });
};

export default generateToken;
