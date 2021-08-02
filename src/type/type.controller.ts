import { Controller, Get } from '@nestjs/common';

@Controller('type')
export class TypeController {
    @Get()
    index(): string {
        return 'Type Page';
    }
}
