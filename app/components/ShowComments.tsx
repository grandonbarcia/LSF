'use client';

import { useEffect, useState } from 'react';

const ShowComments = ({ permalink }: { permalink: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function htmlDecode(input: string) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    const str = doc.documentElement.textContent;
    return str;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json[1].data.children);
      setLoading(false);
    };

    fetchData();
  }, [permalink]);

  if (loading) {
    return <p>Loading...</p>;
  }

  function convertMillisecondsToUTCDate(milliseconds: number) {
    const date = new Date(milliseconds * 1000);
    return date.toUTCString();
  }

  function getTimeDifference(pastDate: number) {
    const past = new Date(convertMillisecondsToUTCDate(pastDate));
    const now = new Date();

    let diffInMs = now.getTime() - past.getTime();

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    diffInMs -= days * (1000 * 60 * 60 * 24);

    if (days !== 0) return `${days} days ago`;

    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    diffInMs -= hours * (1000 * 60 * 60);

    if (hours !== 0) return `${hours} hours ago`;

    const minutes = Math.floor(diffInMs / (1000 * 60));
    diffInMs -= minutes * (1000 * 60);

    if (minutes !== 0) return `${minutes} minutes ago`;

    const seconds = Math.floor(diffInMs / 1000);

    if (seconds !== 0) return `${seconds} seconds ago`;
  }

  return (
    <div className="w-[1080px]">
      {data.map(
        (comment: {
          data: {
            author: string;
            created_utc: number;
            body_html: string;
            id: string;
          };
        }) => (
          <div className="py-5" key={comment.data.id}>
            <div>
              @<span className="font-semibold">{comment.data.author}</span>
              <span className="px-3">|</span>
              <span>{getTimeDifference(comment.data.created_utc)}</span>
            </div>

            <div
              className="pl-3 py-1"
              dangerouslySetInnerHTML={{
                __html: `${htmlDecode(comment.data.body_html)}`,
              }}
            ></div>
          </div>
        )
      )}
    </div>
  );
};

export default ShowComments;
