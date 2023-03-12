import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'
import { Post } from './Posts';


@Entity()
export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    @Column()
    avatar:string;
    @CreateDateColumn()
    createdAt:Date
    @UpdateDateColumn()
    updatedAt:Date
    @OneToMany(()=>Post,(post)=>post.authors)
    posts:Post[]
}