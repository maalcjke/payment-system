import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, PrismaService, UsersService],
})
export class WalletsModule {}
