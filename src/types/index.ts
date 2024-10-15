// login schema object type
export type loginSchemaType = {
  userName: string;
  password: string;
};

export type userDataType = {
  accessToken: string;
  refreshToken: string;
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export type tokenDataType = {
  name: string | undefined;
  sub: string;
  email: string;
  picture: string;
};

export type playListItemType = {
  id: number;
  title: string;
  isSaved: boolean;
  type: "book" | "podcast";
  by: string;
  poster: string;
};
