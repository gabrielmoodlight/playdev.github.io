export interface PostPayload {
  [key: string]: {
    title: string;
    body: string;
  }
}

export interface PostResponse {
    key: string;
    title: string;
    body: string;
}