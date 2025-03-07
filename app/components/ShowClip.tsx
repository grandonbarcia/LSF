import React from 'react';

const ShowClip = ({ Id }: { Id: string }) => {
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

export default ShowClip;
