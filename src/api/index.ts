import axios from 'axios';

export const getInstagramFeeds = async (hashtag) => {
  const userId = '17841466318075876'; // Your Instagram Business User ID
  const accessToken = 'IGQWRNWW5KZAFVyZATd3Ump4U0ZAIS2hrS0NjbGNpNGdyMl9vT1k4ZA3VEaEh5eVlnYnNyYTR6cjJqblptd1lJSkhiTGtJaEdkUllsVmsxT2k5STZAfdmRJbXhDbV9kU1RUT0RoZAHdQc2lYcG5jTGNuSVZA4cDBmczdZAM2sZD'; // Your valid access token

  try {
    // Fetch the hashtag ID by searching for the hashtag
    // const hashtagResponse = await axios.get(`https://graph.instagram.com/ig_hashtag_search`, {
    //   params: {
    //     user_id: userId,
    //     q: hashtag,
    //     access_token: accessToken,
    //   }
    // });

    // // Check if hashtag is found
    if (true) {
    //   const hashtagId = hashtagResponse.data.data[0].id;

      // Fetch recent media related to the hashtag
      const postsResponse = await axios.get(`https://graph.instagram.com/${17841593698074073}/recent_media`, {
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
