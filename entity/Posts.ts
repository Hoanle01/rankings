import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany} from 'typeorm'
import { Author } from './Author';


@Entity()
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    post_content:string;
    @Column()
    post_title:string;
    @Column()
    flat:string;
   
    @Column()
    post_comment_count:number;
    @Column()
    post_like_count:number;
    @Column()
    authorId:number;
    @CreateDateColumn()
    createdAt:Date
    @UpdateDateColumn()
    updatedAt:Date
    @ManyToOne(()=>Author,(author)=>author.id)
    @JoinColumn([{name: 'authorId', referencedColumnName: 'id'}])

    authors:Author
}