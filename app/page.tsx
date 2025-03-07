import DisplayPost from './components/DisplayPost';

import { findAllTwitchClips } from './utils/helpers';

async function getData() {
  const url = `https://www.reddit.com/r/LivestreamFail/.json`;
  const response = await fetch(url);
  const json = await response.json();
  return [...json.data.children];
}

export default async function Home() {
  const posts = await getData();
  const twitchClips = findAllTwitchClips(posts);

  return (
    <div className="px-20">
      <DisplayPost twitchClips={twitchClips} />
    </div>
  );
}
