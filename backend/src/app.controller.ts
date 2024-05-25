import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkAuthGuard } from './clerk.auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(ClerkAuthGuard)
  getHello(@Req() req): Promise<any> {
    return this.appService.getHello(req);
  }
}
