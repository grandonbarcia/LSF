import React, { memo, Dispatch, SetStateAction } from 'react';

import type { TwitchClips } from '../utils/types';

const ListOfClips = ({
  twitchClips,
  setClipNum,
}: {
  twitchClips: TwitchClips;
  setClipNum: Dispatch<SetStateAction<number>>;
}) => {
  const unselectedClip =
    'flex items-center py-2 hover:bg-gradient-to-r from-purple-500 to-purple-900 hover:text-white rounded-xl cursor-pointer';
  return (
    <div className="h-[720px] pl-5 overflow-scroll overflow-x-hidden rounded-xl ">
      {twitchClips.map((clip, i) => (
        <div
          className={unselectedClip}
          key={i}
          onClick={() => {
            setClipNum(i);
          }}
        >
          <img
            className="rounded-xl pl-2"
            src={clip.thumbnail}
            alt={'thumbnail'}
          />
          <span className="font-bold pl-3 pr-2 ">{clip.title}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(ListOfClips);
