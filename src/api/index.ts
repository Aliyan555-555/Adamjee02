// // lib/fetchSocialMediaPosts.js
// import axios from "axios";

// const INSTAGRAM_USER_ID = "17841466318075876";  // Instagram Business Account User ID
// const INSTAGRAM_ACCESS_TOKEN =
//   "IGQWRQX3Fxb190X0tIbzlxUGQ3Vy1vMnBEbG5qRGl4cy1leDFvS2Q2d0dFNjZADYV9wWUoxUWhYUVpTTnBiaTJrV2dzM3ZABMjhWZAktBLU1UMUF1X3R5OGFLc2IxT1VzcGZAiYXJ0UlFoWFhoS0pLam5ON2RSaVZAkVHcZD"; // Instagram Access Token
// const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
// const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

// export async function fetchSocialMediaPosts(hashtag) {
//   if (!hashtag) {
//     throw new Error("Hashtag is required");
//   }

//   try {
//     // Step 1: Fetch Instagram Hashtag ID
//     const instagramHashtagSearchUrl = `https://graph.facebook.com/v13.0/ig_hashtag_search?user_id=${INSTAGRAM_USER_ID}&q=${hashtag}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
//     const instagramHashtagResponse = await axios.get(instagramHashtagSearchUrl);
//     const instagramHashtagId = instagramHashtagResponse.data.data[0]?.id;

//     if (!instagramHashtagId) {
//       throw new Error("Hashtag not found");
//     }

//     // Step 2: Fetch Instagram Media Posts by Hashtag
//     const instagramMediaUrl = `https://graph.facebook.com/v13.0/${instagramHashtagId}/recent_media?user_id=${INSTAGRAM_USER_ID}&fields=id,caption,media_url,permalink,media_type,comments_count,like_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
//     const instagramMediaResponse = await axios.get(instagramMediaUrl);
//     const instagramPosts = instagramMediaResponse.data.data;

//     // Step 3: Fetch Facebook Posts (optional)
//     let facebookPosts = [];
//     if (FACEBOOK_PAGE_ID && FACEBOOK_ACCESS_TOKEN) {
//       const facebookPageFeedUrl = `https://graph.facebook.com/v13.0/${FACEBOOK_PAGE_ID}/feed?fields=message,created_time,story,permalink_url&access_token=${FACEBOOK_ACCESS_TOKEN}`;
//       const facebookFeedResponse = await axios.get(facebookPageFeedUrl);
//       facebookPosts = facebookFeedResponse.data.data.filter(
//         (post) => post.message && post.message.includes(`#${hashtag}`)
//       );
//     }

//     return {
//       instagram: instagramPosts,
//       facebook: facebookPosts,
//     };
//   } catch (error) {
//     console.error(
//       "Error fetching social media posts:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// }
