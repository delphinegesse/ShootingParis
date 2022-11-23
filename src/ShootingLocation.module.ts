import { Module } from '@nestjs/common';
import { ShootingLocationController} from "./ShootingLocation.controller";
import { ShootingLocationService} from "./ShootingLocation.service";
import {HttpModule} from '@nestjs/axios/dist';


@Module({
    imports: [HttpModule],
    controllers: [ShootingLocationController],
    providers: [ShootingLocationService],
})
export class ShootingLocationModule {}
