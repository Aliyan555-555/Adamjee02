import axios from 'axios';

export const getFeeds = async (hashtag) => {
  const instagramUserId = '8524997504288699'; // Your Instagram Business User ID
  const instagramAccessToken = 'EAAPyWKcNdZBQBO1h08PsoZBVxOg1wRZBCZAG8m1jtl9XgiNYzzeVZCw28ZAgyTapABUngqBwnL9N0BOZBjZBrOGbFZC0mdGg7qPCMqM0ZCGg6ZCSDdoiN0zLMyA05stAqZB3iLo1v7UKNAFqrvVR2cY0Hl2LuAzpSgkZAppCCdKGJYLJbtqZAnyb2r3KXSUiTuGrI9gyMG8e8lDD4MvxaSnvSdoAZDZD'; // Your valid Instagram access token
  const facebookAccessToken = 'EAAPyWKcNdZBQBO4E5Mz0tOapZA4praqSDh2woLumyVo2lKdfmymaEh71WaTJqwtRtHWj8Lspcgi3kQOwV0ecJhufmOBfUxtajdexGIUBQtcbsSi0xJpshBZCmLRSIIsCTIiiT1P8hTMAZBJDbReYc65ttQH5oySfuV06G92C4JT6gdZByiIphwavwNAZDZD'; // Your valid Facebook access token
const facebookUserId = '122199804530195533'
  try {
    // Fetch the hashtag ID by searching for the hashtag on Instagram
    // const hashtagResponse = await axios.get('https://graph.facebook.com/v21.0/me', {
    //   params: {
    //     // user_id: instagramUserId,
    //     // q: hashtag,
    //     fields:'id,name',
    //     access_token: instagramAccessToken,
    //   }
    // });

    // let instagramPosts = [];
    // if (hashtagResponse.data.data && hashtagResponse.data.data.length > 0) {
      // const hashtagId = hashtagResponse.data.data[0].id;

      // Fetch recent media related to the hashtag on Instagram
      // const instagramPostsResponse = await axios.get(`https://graph.facebook.com/17873440459141021/recent_media`, {
      //   params: {
      //     user_id: instagramUserId,
      //     fields: 'id,caption,media_type,media_url,permalink',
      //     access_token: instagramAccessToken,
      //   }
      // });

      // instagramPosts = instagramPostsResponse.data.data;
    // }

    // Fetch public posts containing the hashtag on Facebook
    const facebookPostsResponse = await axios.get(`https://graph.facebook.com/v21.0/me/accounts`, {
      params: {
        // q: hashtag,
        // fields: 'id,message,permalink_url,full_picture',
        // user_id:facebookUserId,
        access_token: facebookAccessToken,
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
