import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaService } from '../prisma.service';
import { WalletsService } from '../wallets/wallets.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, WalletsService, UsersService, PrismaService],
})
export class TransactionsModule {}
