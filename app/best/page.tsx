import DisplayPost from '../components/DisplayPost';

import { findAllTwitchClips, getData } from '../utils/helpers';

export default async function Best() {
  const posts = await getData('best');
  const twitchClips = findAllTwitchClips(posts);

  return (
    <div className="px-20">
      <DisplayPost twitchClips={twitchClips} />
    </div>
  );
}
