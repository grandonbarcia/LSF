import { HTMLProps, useState } from 'react';
import Image from 'next/image';
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

  if (typeof props.src === 'string' || isBroken) {
    return (
      <Image
        src={'/img/twitch.jpg'}
        alt="fallback"
        width={150}
        height={100}
        className="rounded"
      />
    );
  }

  return (
    <Image
      onError={handleError}
      alt={props.alt ?? ''}
      width={150}
      height={100}
      src={props.src ?? ''}
    />
  );
}
