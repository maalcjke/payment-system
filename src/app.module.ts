import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, WalletsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
