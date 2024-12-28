class BaseService {
  constructor() {}

  _throwError(message: string, error?: string) {
    throw new Error(
      `${message} - ${
        error ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : ""
      }`,
    );
  }
}

export { BaseService };
