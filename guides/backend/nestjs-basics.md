# NestJS Backend Framework

## Introduction

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with TypeScript, and combines elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). NestJS provides an out-of-the-box application architecture that allows developers to create highly testable, scalable, loosely coupled, and easily maintainable applications.

## Why NestJS Matters

1. **Architecture**: Built on top of Express.js with a modular architecture
2. **TypeScript**: First-class TypeScript support with strong typing
3. **Dependency Injection**: Built-in dependency injection system
4. **Modularity**: Organized into modules for better code organization
5. **Scalability**: Easy to scale and maintain large applications
6. **Testing**: Built-in testing utilities and e2e testing support

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Basic understanding of TypeScript
- Familiarity with decorators and metadata reflection

### Installation

1. Install the Nest CLI globally:
   ```bash
   npm install -g @nestjs/cli
   ```

2. Create a new NestJS project:
   ```bash
   nest new my-nest-app
   ```

3. Navigate to the project directory:
   ```bash
   cd my-nest-app
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

## Core Concepts

### 1. Modules

Modules are the basic building blocks of a NestJS application:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Other modules that this module depends on
  controllers: [AppController], // Controllers that belong to this module
  providers: [AppService], // Services that belong to this module
  exports: [] // Services that should be available to other modules
})
export class AppModule {}
```

### 2. Controllers

Controllers handle incoming requests and return responses:

```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns user #${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
```

### 3. Providers (Services)

Providers are classes that can be injected as dependencies:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: CreateUserDto): User {
    const user = { id: Date.now().toString(), ...createUserDto };
    this.users.push(user);
    return user;
  }
}
```

### 4. DTOs (Data Transfer Objects)

DTOs define the shape of data for validation:

```typescript
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
```

## Advanced Features

### 1. Middleware

Middleware functions have access to the request and response objects:

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request to: ${req.method} ${req.url}`);
    next();
  }
}
```

### 2. Guards

Guards determine whether a request will be handled by the route handler:

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

### 3. Interceptors

Interceptors transform the data returned from a method:

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        data,
        timestamp: new Date().toISOString()
      }))
    );
  }
}
```

### 4. Pipes

Pipes transform input data to the desired form:

```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Transform and validate the value
    return value;
  }
}
```

## Database Integration

### 1. TypeORM Integration

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'mydb',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

### 2. Mongoose Integration

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AppModule {}
```

## Best Practices

1. **Project Structure**
   - Organize code into modules
   - Use feature modules
   - Follow the Single Responsibility Principle
   - Keep controllers thin

2. **Error Handling**
   - Use exception filters
   - Implement proper error messages
   - Handle async errors
   - Use HTTP exceptions

3. **Security**
   - Implement authentication
   - Use guards for authorization
   - Validate input data
   - Use environment variables

4. **Testing**
   - Write unit tests
   - Implement e2e tests
   - Use test coverage
   - Mock dependencies

## Common Pitfalls

1. **Architecture**
   - Over-complicating modules
   - Not using dependency injection
   - Tight coupling between modules
   - Poor error handling

2. **Performance**
   - Not using caching
   - Inefficient database queries
   - Missing indexes
   - Not implementing pagination

3. **Security**
   - Not validating input
   - Exposing sensitive data
   - Missing authentication
   - Not using HTTPS

4. **Testing**
   - Not writing tests
   - Not mocking dependencies
   - Missing edge cases
   - Not testing error scenarios

## Practice Exercises

1. Create a basic NestJS application
2. Implement CRUD operations
3. Add authentication and authorization
4. Integrate with a database
5. Write tests for your application

[Continue to Practice Exercises](nestjs-practice.md) 