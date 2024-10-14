interface TodoErrorInterface{
    statusCode: number,
    message: string;
}
export type ResponseGetTodoError = CommonAPIResponseType<TodoErrorInterface>;