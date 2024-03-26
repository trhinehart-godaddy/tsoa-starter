/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserCreateParams } from '../models/UserCreateParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns User User found
   * @throws ApiError
   */
  public getUser({
    userId,
  }: {
    userId: number,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}',
      path: {
        'userId': userId,
      },
    });
  }
  /**
   * Create a new user
   * @returns User Created User
   * @throws ApiError
   */
  public create({
    requestBody,
  }: {
    requestBody: UserCreateParams,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
