export interface IAlbum {
  userId?: number;
  id: number;
  title: string;
}

export const getAlbums = async (): Promise<IAlbum[]> => {
  return await fetch("https://jsonplaceholder.typicode.com/albums").then((res) => res.json())
}