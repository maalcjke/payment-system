import { User } from '../../users/entities/user.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

export class Wallet {
  id: number;
  userId: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  history: Transaction[];
}
