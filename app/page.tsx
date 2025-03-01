import DisplayPost from './components/DisplayPost';

async function getData(sortBy: string, time: string) {
  const url = `https://www.reddit.com/r/LivestreamFail/${sortBy}/.json?t=${time}`;
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

function isTwitchClip(str: string) {
  return isFirstLetterCapital(str);
}

function trimClipID(str: string) {
  return str.split('?')[0];
}

type Posts = {
  data: {
    url: string;
    title: string;
    ups: number;
    downs: number;
    thumbnail: string;
  };
  kind: string;
};

function findAllTwitchClips(posts: Posts[]) {
  const twitchClips = [];

  for (let i = 0; i < posts.length; i++) {
    const lastElement = posts[i].data.url.split('/').length - 1;
    const urlSplit = posts[i].data.url.split('/');
    const currClipId = trimClipID(urlSplit[lastElement]);

    if (isTwitchClip(currClipId)) {
      console.log(i, posts[i].data.title);
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

export default async function Home() {
  const posts = await getData('hot', 'today');
  const twitchClips = findAllTwitchClips(posts);

  return (
    <div className="px-20 flex items-center justify-center min-h-screen">
      <DisplayPost twitchClips={twitchClips} />
    </div>
  );
}
