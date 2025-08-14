import { Request, Response } from 'express';

export const helloController = (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
};

//test husky pre-commit hook
