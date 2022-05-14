import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //@get
  //attendance
  //accounts

  @Get('/getAccount/:id')
  getAccount(@Param('id') term: string) {
    return this.userService.getAccount(term);
  }

  //@post2
  //add attendance
  //add accounts

  @Post('/addAccount')
  addAccount(@Body() body: any) {
    return this.userService.addAccount(body);
  }

  //@patch
  //onLeave
  //resigned

  //@delete
  //delete

  //For Reference
  //------------------------------------------------------
  // @Post('/register')
  // register(@Body() body: any) {
  //   return this.userService.register(body);
  // }

  // @Get('/all')
  // getAll() {
  //   return this.userService.getAllUser();
  // }

  // @Get('/:id')
  // getUser(@Param('id') id: string) {
  //   return this.userService.getUser(id);
  // }

  // @Put('/:id')
  // putUser(@Param('id') id: string, @Body() body: any) {
  //   return this.userService.putUser(id, body);
  // }

  // @Patch('/:id')
  // patchUser(@Param('id') id: string, @Body() body: any) {
  //   return this.userService.patchUser(id, body);
  // }

  // @Delete('/:id')
  // deleteUser(@Param('id') id: string) {
  //   return this.userService.deleteUser(id);
  // }

  // @Post('/login')
  // userLogin(@Body() body: any) {
  //   return this.userService.loginUser(body);
  // }

  // @Get('/search/:term')
  // searchTerm(@Param('term') term: string) {
  //   return this.userService.searchTerm(term);
  // }
}
