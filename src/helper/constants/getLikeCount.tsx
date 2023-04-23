export const getCountedLikes = (likes: LikeType[] | undefined, receiptId: string): number => {
	return likes?.filter((like) => like.attributes.receiptId === receiptId)?.length ?? 0;
};

export const getCountedLikesForUser = (likes: LikeType[] | undefined, user: string): number => {
	return likes?.filter((like) => like.attributes.liker === user)?.length ?? 0;
};

export const hasUserLikedReceipt = (likes: LikeType[] | undefined, user: string, receiptId: string): boolean => {
	if (!likes || !Array.isArray(likes)) {
		return false;
	}

	for (const {attributes: { liker, receiptId: likedReceiptId }} of likes) {
		if (liker === user && likedReceiptId === receiptId) {
			return true;
		}
	}

	return false;
};
