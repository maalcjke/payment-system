import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create({ email, password }: CreateUserDto) {
    const user = await this.findByEmail(email);
    if (user) {
      throw new HttpException(
        { message: 'User already exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    //TO:DO try/catch
    const hashPassword = await argon2.hash(password);

    return this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        Wallet: {
          create: {
            balance: 0,
          },
        },
      },
      include: {
        Wallet: true,
      },
    });
  }

  async login({ email, password }: CreateUserDto) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new HttpException(
        { message: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    if (!(await argon2.verify(user.password, password))) {
      throw new HttpException(
        { message: 'Incorrect credentials' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = { email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email: email } });
  }

  async findById(id: number) {
    return this.prisma.user.findFirst({ where: { id: id } });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
