import axios from 'axios';

export const getInstagramFeeds = async (hashtag) => {
  const userId = '17841466318075876'; // Your Instagram Business User ID
  const accessToken = 'IGQWRPeVlUOU9rUkpoZAWFzWUxGX3ZAmN3VxNlpjTDI2MVFXalpTNjBKZAjIzeE1Qa0wyOHJ2aGdmaGY4UXNSakFyenVjMDFmMmt0bzRmUDFlWUU4LTQxVlB0ajgwX3hqUmx2U1otTjE3T0VwUV9IeWVqNi0wUm1SY1kZD'; // Your valid access token

  try {
    // Fetch the hashtag ID by searching for the hashtag
    const hashtagResponse = await axios.get(`https://graph.instagram.com/ig_hashtag_search`, {
      params: {
        user_id: userId,
        q: hashtag,
        access_token: accessToken,
      }
    });

    // Check if hashtag is found
    if (hashtagResponse.data.data && hashtagResponse.data.data.length > 0) {
      const hashtagId = hashtagResponse.data.data[0].id;

      // Fetch recent media related to the hashtag
      const postsResponse = await axios.get(`https://graph.instagram.com/${hashtagId}/recent_media`, {
        params: {
          user_id: userId,
          access_token: accessToken,
        }
      });

      return postsResponse.data.data; // Return the fetched posts
    } else {
      return { error: 'Hashtag not found' }; // Handle case if hashtag is not found
    }
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return { error: 'Failed to fetch posts' };
  }
};
