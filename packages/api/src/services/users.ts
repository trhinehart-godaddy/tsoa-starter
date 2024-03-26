import { User, UserData } from '../models/users';

const db: User[] = [{
  id: 1,
  name: 'Alice'
}, {
  id: 2,
  name: 'Bob'
}, {
  id: 3,
  name: 'Charlie'
}];

export interface UserCreateParams extends UserData {}

export class UsersService {
  public async get(id: number) {
    return db.find(user => user.id === id);
  }

  public async create(data: UserCreateParams) {
    const id = db.length + 1;
    db.push({ id, ...data });
    return await this.get(id);
  }
}
