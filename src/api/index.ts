import axios from 'axios';

export const getInstagramFeeds = async (hashtag) => {
  const userId = '8385124954926396';
  const accessToken = 'IGQWRORmlQTVc1Q2ZALMlJqdVdQUFI3ZAmNWdnQyckdWemluQ2lwbTVIdS1oUmUyRy1DLW16OEx2dDExcHNBT1U4anJBNmJldVVkQms1RjFtdlN0VVVhUkpUZAUc1MElDN0gzUGxlY29Pdy1sb3ljR3RmMENIQTE2ZAkEZD';

  try {
    // Search for the hashtag ID
    const hashtagResponse = await axios.get(`https://graph.instagram.com/ig_hashtag_search`, {
      params: {
        user_id: userId,
        q: hashtag,
        access_token: accessToken
      }
    });

    const hashtagId = hashtagResponse.data.data[0].id;

    // Fetch posts for the given hashtag ID
    const postsResponse = await axios.get(`https://graph.instagram.com/${hashtagId}/recent_media`, {
      params: {
        user_id: userId,
        access_token: accessToken,
      }
    });

    return postsResponse.data.data; // Return the fetched posts
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return { error: 'Failed to fetch posts' };
  }
};
