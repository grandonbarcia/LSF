'use client';

import { useState } from 'react';

import type { TwitchClips } from '../utils/types';
import ControlButton from './ControlButton';
import ListOfClips from './ListOfClips';
import ShowClip from './ShowClip';

export default function DisplayPost({
  twitchClips,
}: {
  twitchClips: TwitchClips;
}) {
  const [clipNum, setClipNum] = useState(0);

  const nextClip = () => {
    if (clipNum !== twitchClips.length - 1) {
      setClipNum((prevClipNum) => prevClipNum + 1);
    } else {
      setClipNum(0);
    }
  };

  const prevClip = () => {
    if (clipNum !== 0) {
      setClipNum((prevClipNum) => prevClipNum - 1);
    } else {
      setClipNum(twitchClips.length - 1);
    }
  };

  const { title, Id } = twitchClips[clipNum];

  return (
    <div>
      <div className="flex">
        <ShowClip Id={Id} />
        <ListOfClips
          twitchClips={twitchClips}
          setClipNum={setClipNum}
          clipNum={clipNum}
        />
      </div>
      <div className="flex justify-between w-[1280px] py-2">
        <p className="text-4xl font-bold uppercase w-5/6 overflow-auto text-wrap ">
          {title}
        </p>
        <div className="flex justify-end w-1/6">
          <ControlButton type={'prev'} goTo={prevClip} />
          <ControlButton type={'next'} goTo={nextClip} />
        </div>
      </div>
    </div>
  );
}
