import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from './dynamic.service';
import { CreateDynamicDto } from './dto/create-dynamic.dto';
import { UpdateDynamicDto } from './dto/update-dynamic.dto';

@Controller('dynamic')
export class DynamicController {
  constructor(private readonly dynamicService: DatabaseService) {}

  
}
