'use client';

import { useMemo, useState } from 'react';

type Clip = {
  Id: string;
  title: string;
  ups: number;
  downs: number;
  thumbnail: string;
};

type TwitchClips = {
  twitchClips: Clip[];
};

export default function DisplayPost({ twitchClips }: TwitchClips) {
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

  const unselectedClip =
    'flex items-center py-2 hover:bg-gradient-to-r from-purple-500 to-purple-900 hover:text-white rounded-xl cursor-pointer';
  const selectedClip =
    'flex items-center py-2 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-xl cursor-pointer';

  const ListOfClips = function ListOfClips() {
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

  const ShowClip = () => {
    const { Id } = twitchClips[clipNum];

    return (
      <div>
        <iframe
          allow="autoplay"
          className=" rounded-xl"
          src={`https://clips.twitch.tv/embed?clip=${Id}&muted=false&autoplay=true&parent=localhost`}
          height="720"
          width="1280"
        ></iframe>
      </div>
    );
  };

  const ListOfClipsMemo = useMemo(() => <ListOfClips />, []);
  const { title } = twitchClips[clipNum];

  return (
    <div className="">
      <div className="flex">
        <ShowClip />
        {ListOfClipsMemo}
      </div>
      <div className="flex justify-between w-[1280px] py-2">
        <p className="text-4xl font-bold break-all uppercase w-5/6 overflow-auto ">
          {title}
        </p>
        <div className="flex justify-end w-1/6">
          <div
            onClick={prevClip}
            className="rounded h-[50px] relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Prev</span>
          </div>

          <div
            onClick={nextClip}
            className="rounded h-[50px] relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Next</span>
          </div>
        </div>
      </div>
      <div className="w-[1280px] flex justify-between"></div>
    </div>
  );
}
