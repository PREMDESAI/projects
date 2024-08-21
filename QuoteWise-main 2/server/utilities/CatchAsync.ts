import { Request, Response, NextFunction } from 'express';

function wrapAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
    return function(req: Request, res: Response, next: NextFunction) {
        fn(req, res, next).catch(e => { next(e); });
    };
}

export default wrapAsync;