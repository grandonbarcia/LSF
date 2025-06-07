import type { Posts } from './types';

export async function getData(category: string) {
  const url = `https://www.reddit.com/r/LivestreamFail/${category}.json`;
  const response = await fetch(url);
  const json = await response.json();
  return [...json.data.children];
}

function isFirstLetterCapital(str: string) {
  if (!str) {
    return false; // Handle empty strings
  }
  return /^[A-Z]/.test(str);
}

function isTwitchClip(url: string) {
  return isFirstLetterCapital(url) && url.length > 36;
}

// remove query strings and parameters from clip id
function trimClipID(str: string) {
  return str.split('?')[0];
}

export async function findAllTwitchClips(posts: Posts[]) {
  const twitchClips = [];

  for (let i = 0; i < posts.length; i++) {
    //seperate clip id from url string
    const currUrl = posts[i].data.url;
    const lastElement = currUrl.split('/').length - 1;
    const urlSplit = currUrl.split('/');
    const currClipId = trimClipID(urlSplit[lastElement]);

    if (isTwitchClip(currClipId)) {
      const currClip = {
        Id: currClipId,
        title: posts[i].data.title,
        ups: posts[i].data.ups,
        downs: posts[i].data.downs,
        thumbnail: posts[i].data.thumbnail,
        permalink: posts[i].data.permalink,
      };

      twitchClips.push(currClip);
    }
  }

  return [...twitchClips];
}
