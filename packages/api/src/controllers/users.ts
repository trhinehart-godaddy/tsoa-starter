import { Body, Controller, Get, Path, Post, Res, Response, Route, SuccessResponse, Tags, TsoaResponse } from 'tsoa';
import { UserCreateParams, UsersService } from '../services/users';
import { User } from '../models/users';

@Tags('Users')
@Route('users')
export class UsersController extends Controller {

  @Get('{userId}')
  @SuccessResponse("200", "User found")
  @Response("404", "User not found")
  public async getUser(
    @Path() userId: number,
    @Res() notFoundError: TsoaResponse<404, void>
  ): Promise<User> {
    const user = await new UsersService().get(userId);
    if (!user) {
      return notFoundError(404);
    }
    return user;
  }

  /**
   * Create a new user
   *
   * @example body {
   "name": "Troy"
   }
   */
  @SuccessResponse("201", "Created User")
  @Post()
  public async create(
    @Body() body: UserCreateParams
  ): Promise<User> {
    const user = await new UsersService().create(body);
    this.setStatus(201);
    return user!;
  }
}
