import { Test } from '@nestjs/testing';

import { User } from '@prisma/client';

import { UsersController } from '@controllers/users/users.controller';

import { UsersService } from '@services/users/users.service';

import { userStub } from '../../../test/stubs/user.stub';
import { UpdateUserDto } from '@/modules/users/dtos/update-user.dto';

jest.mock('@services/users/users.service');

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = moduleRef.get<UsersController>(UsersController);
    service = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User | null;

      beforeEach(async () => {
        user = await controller.create(userStub());
      });

      test('then it should call usersService', () => {
        expect(service.createUser).toBeCalledWith(userStub());
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('users', () => {
    describe('when users is called', () => {
      let user: User[] | null;

      beforeEach(async () => {
        user = await controller.findAll();
      });

      test('then it should call usersService', () => {
        expect(service.users).toHaveBeenCalled();
      });

      test('then it should return a user', () => {
        expect(user).toEqual([userStub()]);
      });
    });
  });

  describe('findUser', () => {
    describe('when findUser is called', () => {
      let user: User | null;

      beforeEach(async () => {
        user = await controller.findOne(userStub().id);
      });

      test('then it should call usersService', () => {
        expect(service.findUser).toBeCalledWith(userStub().id);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('updateUser', () => {
    describe('when updateUser is called', () => {
      let updateUserDto: UpdateUserDto;
      let user: User | null;

      beforeEach(async () => {
        updateUserDto = {
          name: 'John',
          lastName: 'Wick',
        };
        user = await controller.update(userStub().id, updateUserDto);
      });

      test('then it should call usersService', () => {
        expect(service.updateUser).toBeCalledWith(userStub().id, updateUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('deleteUser', () => {
    describe('when deleteUser is called', () => {
      let message: string;

      beforeEach(async () => {
        message = await controller.delete(userStub().id);
      });

      test('then it should call usersService', () => {
        expect(service.deleteUser).toBeCalledWith(userStub().id);
      });

      test('then it should return a string', () => {
        expect(message).toEqual('User deleted');
      });
    });
  });
});
