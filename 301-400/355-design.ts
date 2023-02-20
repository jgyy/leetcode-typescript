/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
class Twitter {
    private tweets: [number, number][];
    private follows: Map<number, Set<number>>;

    constructor() {
        this.tweets = [];
        this.follows = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.push([userId, tweetId]);
    }

    getNewsFeed(userId: number): number[] {
        const followees = this.follows.get(userId) || new Set();
        followees.add(userId);
        const result = [];
        for (let i = this.tweets.length - 1; i >= 0; i--) {
            const [user, tweet] = this.tweets[i];
            if (followees.has(user)) {
                result.push(tweet);
                if (result.length == 10) {
                    break;
                }
            }
        }
        return result;
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }
        this.follows.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.follows.has(followerId)) {
            this.follows.get(followerId)!.delete(followeeId);
        }
    }
}

const t = new Twitter();
t.postTweet(1, 5);
console.log(t.getNewsFeed(1));
t.follow(1, 2);
t.postTweet(2, 6);
console.log(t.getNewsFeed(1));
t.unfollow(1, 2);
console.log(t.getNewsFeed(1));
