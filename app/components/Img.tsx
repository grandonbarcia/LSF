import { HTMLProps, useState } from 'react';

/**
 * We extend `<img>`'s properties as we want our
 * component to act as a drop-in replacement for it
 */
type ImgProps = HTMLProps<HTMLImageElement> & {
  /**
   * Optional fallback to render in place of a missing image
   * @default null
   */
};

export function Img(props: ImgProps) {
  /**
   * is our image broken?
   */
  const [isBroken, setIsBroken] = useState(false);

  function handleError() {
    setIsBroken(true);
  }

  if (isBroken) {
    return (
      <img
        src={'./img/twitch.jpg'}
        alt="fallback"
        width={'150px'}
        height={'100px'}
        className="rounded"
      />
    );
  }

  return <img onError={handleError} {...props} />;
}
