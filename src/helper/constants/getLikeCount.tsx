export const getCountedLikes = (likes: LikeType[] | undefined, receiptId: string): number => {
    if (!likes || !Array.isArray(likes) || typeof receiptId !== "string") {
      return 0;
    }
  
    return likes.reduce((count, like) => {
      return like.attributes.receiptId === receiptId ? count + 1 : count;
    }, 0);
  };