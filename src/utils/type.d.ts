export interface CommonAPIResponseType<T> {
    statusCode: number;
    message: string;
    data: T;
    errorCode?: number;
  }