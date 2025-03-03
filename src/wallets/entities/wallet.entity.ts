import { User } from '../../users/entities/user.entity';
import { WalletsHistory } from './walletHistory.entity';

export class Wallet {
  id: number;
  userId: number;
  balance: number;
  user: User;
  history: WalletsHistory[];
}
