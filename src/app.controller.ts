import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/cv')
  @Render('cv')
  root() {
    return
  }
}