import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get()
  helloWorldHandler() {
    // Handle the request logic here
    return 'Welcome to interview logger!';
  }
}
