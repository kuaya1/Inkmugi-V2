interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramMedia[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

/**
 * Fetches Instagram media from the API using the provided access token
 * @param accessToken - Instagram Graph API access token
 * @param limit - Number of media items to fetch (default: 8)
 * @returns Promise with Instagram media items
 */
export const fetchInstagramMedia = async (
  accessToken: string,
  limit: number = 8
): Promise<InstagramMedia[]> => {
  try {
    const fields = 'id,media_type,media_url,permalink,caption,thumbnail_url,timestamp';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}&limit=${limit}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }
    
    const data: InstagramApiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    throw error;
  }
};

/**
 * Determines the appropriate media URL based on media type
 * For videos, uses thumbnail_url if available, otherwise uses media_url
 */
export const getMediaUrl = (media: InstagramMedia): string => {
  if (media.media_type === 'VIDEO' && media.thumbnail_url) {
    return media.thumbnail_url;
  }
  return media.media_url;
};
