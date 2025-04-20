import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './infra/http/user/user.module';
import { DatabaseModule } from './infra/db/database/database.module';
import { ConfigureModule } from './infra/configure/configure.module';

@Module({
  imports: [UserModule, DatabaseModule, ConfigureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
