import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('demo')
export class DemoController {

    @Get()
    findAll() {
        return { data: "demo works" };
    }


}


