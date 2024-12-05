import axios from 'axios';

export const getFeeds = async (hashtag) => {
  const instagramUserId = '122199804530195533'; // Your Instagram Business User ID
  const instagramAccessToken = 'EAAPyWKcNdZBQBOwhXIXN0sAs3yeBg7UkVncIIRjNNiVIiBXZBCvgLmkhA7BUiuY47dKpZCPSSyuzP3PvHilGCoTYZA2pR9MH5zamsEAP5iWEFZANyq4opZAbnrW6jqG2fs7V85fCGWZCihxuYjVRMFJUIdTAk0SRGZCdHlTmpRWLFZCrH6E9yBZBjfxeKCIrX1ZCoVvlwMCYQopAgVD3d1nRQZDZD'; // Your valid Instagram access token
  const facebookAccessToken = 'your-facebook-access-token'; // Your valid Facebook access token

  try {
    // Fetch the hashtag ID by searching for the hashtag on Instagram
    const hashtagResponse = await axios.get('https://graph.instagram.com/ig_hashtag_search', {
      params: {
        user_id: instagramUserId,
        q: hashtag,
        access_token: instagramAccessToken,
      }
    });

    let instagramPosts = [];
    if (hashtagResponse.data.data && hashtagResponse.data.data.length > 0) {
      const hashtagId = hashtagResponse.data.data[0].id;

      // Fetch recent media related to the hashtag on Instagram
      const instagramPostsResponse = await axios.get(`https://graph.instagram.com/${hashtagId}/recent_media`, {
        params: {
          user_id: instagramUserId,
          fields: 'id,caption,media_type,media_url,permalink',
          access_token: instagramAccessToken,
        }
      });

      instagramPosts = instagramPostsResponse.data.data;
    }

    // Fetch public posts containing the hashtag on Facebook
    const facebookPostsResponse = await axios.get(`https://graph.facebook.com/v12.0/ig_hashtag_search`, {
      params: {
        q: hashtag,
        fields: 'id,message,permalink_url,full_picture',
        user_id:'122199804530195533',
        access_token: instagramAccessToken,
      }
    });

    const facebookPosts = facebookPostsResponse.data.data;

    // Combine the results from Instagram and Facebook
    const combinedFeeds = [...facebookPosts];
    // const combinedFeeds = [...instagramPosts, ...facebookPosts];

    return combinedFeeds;
  } catch (error) {
    console.error('Error fetching feeds:', error);
    return { error: 'Failed to fetch feeds' };
  }
};
