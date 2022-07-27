export interface Comment {
  name: string;
  message: string;
}

export interface IBlog {
  _id: string;
  title: string;
  date: string;
  description: string;
}

export interface IBlogProps {
  blog: IBlog;
  onClick: any;
}
