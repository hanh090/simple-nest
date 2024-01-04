import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dtos/login';
import { UsersService } from './services/user';

@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}

  async login(loginDTO: LoginDTO): Promise<boolean> {
    const users = await this.usersService.findAll();
    console.log({ users });
    return false;
  }
}
