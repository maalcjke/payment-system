import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { PrismaService } from './prisma.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [UsersModule, WalletsModule, TransactionsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
