import { Response, Request, NextFunction } from 'express';

interface ApiMeta {
  page?: number;
  pageSize?: number;
  totalRecords?: number;
}

interface ApiError {
  code: string;
  message: string;
}

declare module 'express-serve-static-core' {
  interface Response {
    success<T>(data: T, message?: string, meta?: ApiMeta): Response;

    fail(error: ApiError, statusCode?: number): Response;
  }
}

export function responseHelpers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.success = function <T>(data: T, message: string = 'OK', meta?: ApiMeta) {
    const payload: any = {
      success: true,
      message,
      data,
    };
    if (meta) payload.meta = meta;
    return res.json(payload);
  };

  res.fail = function (error: ApiError, statusCode: number = 400) {
    return res.status(statusCode).json({
      success: false,
      message: error.message,
      error,
    });
  };

  next();
}
