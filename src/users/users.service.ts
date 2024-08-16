import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }
  // private readonly users = [
  //   {
  //     userId: 1,
  //     email: 'john@gmail.com',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     email: 'maria@gmail.com',
  //     password: 'guess',
  //   },
  // ];

  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ where: { email } });
  }
}
