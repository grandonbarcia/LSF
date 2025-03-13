import React, { memo, Dispatch, SetStateAction, useState } from 'react';

import type { TwitchClips } from '../utils/types';

const ListOfClips = ({
  twitchClips,
  setClipNum,
  clipNum,
}: {
  twitchClips: TwitchClips;
  setClipNum: Dispatch<SetStateAction<number>>;
  clipNum: number;
}) => {
  const highlightOnHover =
    'flex items-center py-2 hover:bg-gradient-to-r from-purple-500 to-purple-900 hover:text-white rounded-xl cursor-pointer';

  const highlight =
    'flex items-center py-2 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-xl cursor-pointer';

  return (
    <div className="h-[720px] pl-5 overflow-scroll overflow-x-hidden rounded-xl ">
      {twitchClips.map((clip, currClip) => (
        <div
          className={clipNum === currClip ? highlight : highlightOnHover}
          key={currClip}
          onClick={() => {
            setClipNum(currClip);
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
