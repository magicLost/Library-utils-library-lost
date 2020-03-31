declare class Fetch {
  sendPostWithJsonResponse: (
    url: string,
    data: FormData,
    headers?: { [key: string]: string }
  ) => Promise<any>;

  sendGetWithJsonResponse: (url: string) => Promise<any>;

  post: (
    url: string,
    data: FormData,
    headers?: { [key: string]: string }
  ) => Promise<Response>;

  status: (response: Response) => Promise<Response>;

  json: (response: Response) => Promise<any>;
}

export default Fetch;
