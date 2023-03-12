import { Authors } from "../entity/IAuthors";

export const calculateAndSortUsers = (authors: Authors[]) => {
  const users = authors.map((author) => {
    const { posts } = author;
    const score = posts.length * 5 + posts.reduce((acc, post) => {
      return acc + (post.post_like_count * 10 + post.post_comment_count * 15);
    }, 0);  
    return {id:author.id, name: author.name, avatar: author.avatar, score };
  
  });

  const sortedUsers = users.sort((a, b) => b.score - a.score);

  let currentRank = 1;
  let currentScore = sortedUsers[0].score;

  return sortedUsers.map((user, index) => {
    if (user.score < currentScore) {
      currentRank = index + 1;
      currentScore = user.score;
    }

    return { ...user, rank: currentRank };
  });
};
