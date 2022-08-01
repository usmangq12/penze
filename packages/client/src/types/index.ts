export interface Comment {
  name: string;
  message: string;
}

export interface IBlog {
  _id: string;
  title: string;
  description: string;
}

export interface IBlogProps {
  blog: IBlog;
}

export interface IComment {
  _id: string;
  senderName: string;
  comment: string;
  blogId: string;
  level: number;
}

export interface IBlogDetails {
  _id: string;
  title: string;
  description: string;
  comments: IComment[];
}
