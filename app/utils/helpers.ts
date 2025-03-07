import type { Posts } from './types';

function isFirstLetterCapital(str: string) {
  if (!str) {
    return false; // Handle empty strings
  }
  return /^[A-Z]/.test(str);
}

function isTwitchClip(str: string) {
  return isFirstLetterCapital(str);
}

function trimClipID(str: string) {
  return str.split('?')[0];
}

export function findAllTwitchClips(posts: Posts[]) {
  const twitchClips = [];

  for (let i = 0; i < posts.length; i++) {
    const lastElement = posts[i].data.url.split('/').length - 1;
    const urlSplit = posts[i].data.url.split('/');
    const currClipId = trimClipID(urlSplit[lastElement]);

    if (isTwitchClip(currClipId)) {
      const currClip = {
        Id: currClipId,
        title: posts[i].data.title,
        ups: posts[i].data.ups,
        downs: posts[i].data.downs,
        thumbnail: posts[i].data.thumbnail,
      };
      twitchClips.push(currClip);
    }
  }

  return [...twitchClips];
}
