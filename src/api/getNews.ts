export interface IGetNews {
  id: number;
  title: string;
  body: string;
}

export const getNews = async (): Promise<IGetNews[]> => {
  return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
}