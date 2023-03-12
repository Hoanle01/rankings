interface Authors {
    id: number;
    name: string;
    avatar: string;
     createdAt: Date;
    updatedAt: Date;
    posts: Post[];
  }
  
  interface Post {
    id: number;
    post_content: string;
    post_title: string;
    flat: string;
    post_comment_count: number;
    post_like_count: number;
    authorId: number;
    createdAt: Date;
      updatedAt: Date;
  }
  export {Authors }