export type User = {
  id: number;
  name: string;
  email: string;
};

export type Posts = {
  data: {
    url: string;
    title: string;
    ups: number;
    downs: number;
    thumbnail: string;
    permalink: string;
  };
  kind: string;
};

export type Clip = {
  Id: string;
  title: string;
  ups: number;
  downs: number;
  thumbnail: string;
  permalink: string;
};

export type TwitchClips = Clip[];
