import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST', 'localhost'),
                username: configService.get('DATABASE_USER', 'sales'),
                password: configService.get('DATABASE_PASSWORD', 'sales'),
                port: Number(configService.get('DATABASE_PORT', 5432)),
                database: configService.get('DATABASE_DB', 'salesboard'),
                entities: [],
                synchronize: true,
            })
        }),

    ]
})
export class DatabaseModule {}
