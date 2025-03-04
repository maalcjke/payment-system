import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { PrismaService } from '../prisma.service';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private walletsService: WalletsService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const wallet = await this.walletsService.findOne(
      createTransactionDto.walletId,
    );

    if (!wallet) {
      throw new HttpException(
        { message: 'Wallet not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    try {
      if (!wallet) {
        return { message: 'Wallet not found' };
      }

      if (
        createTransactionDto.action === 'PURCHASE' &&
        wallet.balance < createTransactionDto.amount
      ) {
        return { message: 'Insufficient funds' };
      }

      const [transaction, updatedWallet] = await this.prisma.$transaction([
        this.prisma.walletTransaction.create({ data: createTransactionDto }),
        this.prisma.wallet.update({
          where: { id: createTransactionDto.walletId },
          data: {
            balance: {
              increment:
                createTransactionDto.action === 'REFILL'
                  ? createTransactionDto.amount
                  : -createTransactionDto.amount,
            },
          },
          select: { balance: true },
        }),
      ]);

      return {
        transaction,
        wallet: updatedWallet,
      };
    } catch (error) {
      if (error instanceof Error)
        return { message: 'Error creating transaction', error };
    }
  }

  findOne(id: string) {
    return this.prisma.walletTransaction.findFirst({
      where: { id: id },
    });
  }
}
