export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import DisplayPost from '../components/DisplayPost';

import { findAllTwitchClips, getData } from '../utils/helpers';

export default async function Top() {
  const posts = await getData('top');
  const twitchClips = findAllTwitchClips(posts);

  return (
    <div className="px-20">
      <DisplayPost twitchClips={twitchClips} />
    </div>
  );
}
