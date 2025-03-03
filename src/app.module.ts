import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [UsersModule, WalletsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
