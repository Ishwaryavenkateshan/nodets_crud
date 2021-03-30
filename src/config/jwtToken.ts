import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
export class JwtToken {

    async generateToken(id: string): Promise<string> {
        return await jwt.sign({ user: id }, `${process.env.JWT_KEY}`, {
            expiresIn: 86400
        });
    }
    async tokenValidation(req: Request, res: Response, next: NextFunction): Promise<any> {
        const token: any = req.headers.auth;
        if (!token)
            res.status(401).send({ auth: false, message: 'No token provided.' });
        return await jwt.verify(token, `${process.env.JWT_KEY}`, (err: any, decoded: any) => {
            if (err)
                res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            else
                next();
        })
    }
}



