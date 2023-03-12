import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from '../entity/Posts';

export class PostController {
    static async getPostitem(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const userTop = await getRepository(Post).find({ 
                where: {
                    authorId: id
                }
            });
            res.send(userTop);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
}
