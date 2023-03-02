import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config/dist";
import { TypeOrmModuleOptions,TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory{
    constructor(private readonly conigService:ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type:"mysql",
            host:this.conigService.get<string>("DATABASE_HOST"),
            port:this.conigService.get<number>("DATABASE_PORT"),
            username:this.conigService.get<string>("DATABASE_USERNAME"),
            password:this.conigService.get<string>("DATABASE_PASSWORD"),
            database:this.conigService.get<string>("DATABASE_NAME"),
            entities:[],
            synchronize: true,
        }
    }

}