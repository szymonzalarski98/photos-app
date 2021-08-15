export interface INews {
  id: number;
  title: string;
  body: string;
}

export const getNews = async (): Promise<INews[]> => {
  return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
}