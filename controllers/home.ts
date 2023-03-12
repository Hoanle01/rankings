
import express, { Request, Response } from 'express'
import { Connection, createQueryBuilder, getConnection, getManager, getRepository, QueryBuilder } from 'typeorm'
import { Author } from '../entity/Author'

import { Authors } from '../entity/IAuthors'
import { getFillterType } from '../middlewares/fillter'

import { calculateAndSortUsers } from '../middlewares/sort'



export class HomePageController {
    static async getPostitem (req: Request, res: Response){

    const { type } = req.query
    const dateMonth: number = parseInt(req.query.dateMonth as string)
    const dateYear: number = parseInt(req.query.dateYear as string)
    const querydb = getRepository(Author).createQueryBuilder("authors")
        .leftJoinAndSelect("authors.posts", "posts")
        .getMany()
    try {
        switch (true) {
            case (type && !dateMonth && !dateYear):{
            try {
                const userTop: Authors[] = await querydb
                const fillterType=getFillterType(userTop,type)
                const ranking = calculateAndSortUsers(fillterType)
                res.send(ranking)
            } catch (error) {
                res.send(error)
            }
            break;
        }
    
    
   
            case (type && dateMonth && !dateYear) :{
            try {
                const userTop = await querydb
                const authorsWithPosts = userTop.filter(author => {
                    if (author.posts.length > 0) {
                         author.posts.some(post => (post.flat === type) && (new Date(post.createdAt).getMonth() + 1 === dateMonth));
                    }
                    return author
                });

                const filteredAuthors = authorsWithPosts.map(author => {
                    return {
                        ...author,
                        posts: author.posts.filter(post => (post.flat === type) && (new Date(post.createdAt).getMonth() + 1 === dateMonth))
                    };
                });

                const ranking = calculateAndSortUsers(filteredAuthors)
                res.send(ranking)
            } catch (error) {
                res.send(error)
            }
            break;
        }
        case (type && !dateMonth && dateYear): {
            try {
                const userTop = await querydb
                const authorsWithPosts = userTop.filter(author => {
                    if (author.posts.length > 0) {
                         author.posts.some(post => (post.flat === type) && (new Date(post.createdAt).getFullYear() === dateYear));
                    }
                    return author
                });

                const filteredAuthors = authorsWithPosts.map(author => {
                    return {
                        ...author,
                        posts: author.posts.filter(post => (post.flat === type) && (new Date(post.createdAt).getFullYear() === dateYear))
                    };
                });
                const ranking = calculateAndSortUsers(filteredAuthors)
                res.send(ranking)
            } catch (error) {
                res.send(error)
            }
        }
        case (!type && dateMonth && !dateYear) :{
            try {
                const userTop = await querydb
                const authorsWithPosts = userTop.filter(author => {
                    if (author.posts.length > 0) {
                         author.posts.some(post => new Date(post.createdAt).getMonth() + 1 === dateMonth);
                    }
                    return author
                });

                const filteredAuthors = authorsWithPosts.map(author => {
                    return {
                        ...author,
                        posts: author.posts.filter(post => new Date(post.createdAt).getMonth() + 1 === dateMonth)
                    };
                });
                const ranking = calculateAndSortUsers(filteredAuthors)
                res.send(ranking)

            } catch (error) {
                res.send(error)
            }
            break;
        }
        case (!type && !dateMonth && dateYear): {
            try {
                const userTop = await querydb
                const authorsWithPosts = userTop.filter(author => {
                    if (author.posts.length > 0) {
                     author.posts.some(post => new Date(post.createdAt).getFullYear() === dateYear);
                    }
                    return author
                });

                const filteredAuthors = authorsWithPosts.map(author => {
                    return {
                        ...author,
                        posts: author.posts.filter(post => new Date(post.createdAt).getFullYear() === dateYear)
                    };
                });


                const ranking = calculateAndSortUsers(filteredAuthors)
                res.send(ranking)

            } catch (error) {
                res.send(error)
            }

        }
        default:{
            
            try {
                const userTop = await querydb
                const ranking = calculateAndSortUsers(userTop)
                res.send(ranking)

            } catch (error) {
                res.send(error)
            }
            break;
        }
    }
    } catch (error) {
        res.send(error)
    }

}
}