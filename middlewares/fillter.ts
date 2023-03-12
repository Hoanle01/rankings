import { Authors } from "../entity/IAuthors";


export function getFillterType(userTop:Authors[],type:any){
const authorsWithPosts = userTop.filter(author => {
    if (author.posts.length > 0) {
         author.posts.some(post => (post.flat === type));
    }
    return author
});
const filteredAuthors = authorsWithPosts.map(author => {
    return {
        ...author,
        posts: author.posts.filter(post => (post.flat === type))
    };
});
return filteredAuthors

}
