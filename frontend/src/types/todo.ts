export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTodoInput = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTodoInput = Partial<CreateTodoInput>; 