import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDTO } from './dtos/login';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  async login(@Body() loginDTO: LoginDTO): Promise<any> {
    const result = await this.appService.login(loginDTO);
    return { result };
  }
}
