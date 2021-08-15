export interface IComment {
  id: number;
  postId: number;
  body: string;
  name: string;
  email: string;
}

export const getComments = async (postId: number): Promise<IComment[]> => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) => res.json())
}