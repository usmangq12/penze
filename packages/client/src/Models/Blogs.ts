export interface IBlog {
    id: string;
    title: string;
    date: string;
    content: string;
  }
  
  export interface IBlogProps {
    blog: IBlog;
    onClick: any;
  }