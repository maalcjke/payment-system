import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { PrismaService } from '../prisma.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class WalletsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create({ userId }: CreateWalletDto) {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new HttpException(
        { message: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    const wallet = await this.findByUserId(user.id);

    if (wallet) {
      throw new HttpException(
        { message: 'User has wallet' },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.prisma.wallet.create({
      data: {
        userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.wallet.findFirst({ where: { id: id } });
  }

  findByUserId(id: number) {
    return this.prisma.wallet.findFirst({ where: { userId: id } });
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return this.prisma.wallet.update({
      data: updateWalletDto,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prisma.wallet.delete({ where: { id: id } });
  }
}
