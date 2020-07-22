import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";
import gql from 'graphql-tag';
import TodoFilters from "./TodoFilters";
import { useQuery } from "@apollo/react-hooks";
import { GetMyTodosQuery } from '../../generated/graphql';
import { Todo } from './TodoItem';



const GET_MY_TODOS = gql`
query getMyTodos {
  todos(where: { is_public: { _eq: false} }, order_by: { created_at: desc }) {
    id
    title
    is_completed
}
}`;


const TodoPrivateList = () => {

  const [filter, setFilter] = useState<string>("all");
  const { loading, error, data } = useQuery<GetMyTodosQuery>(GET_MY_TODOS);
  // const todos = [
  //   {
  //     id: 1,
  //     title: "This is private todo 1",
  //     is_completed: true
  //   },
  //   {
  //     id: 2,
  //     title: "This is private todo 2",
  //     is_completed: false
  //   }
  // ];

  const filterResults = (filter: string): void => {
    setFilter(filter);
  };

  const clearCompleted = () => {
  };

  if (loading) {
    return (<div>Loading....</div>);
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }

  let filteredTodos = data.todos;
  if (filter === "active") {
    filteredTodos = data.todos.filter((todo: Todo) => todo.is_completed !== true);
  } else if (filter === "completed") {
    filteredTodos = data.todos.filter((todo: Todo) => todo.is_completed === true);
  }

  const todoList = filteredTodos.map((todo: Todo, index: number) => (
    <TodoItem
      key={'item' + index}
      index={index}
      todo={todo}
    />
  ));

  return (
    <Fragment>
      <div className="todoListWrapper">
        <ul>
          {todoList}
        </ul>
      </div>

      <TodoFilters
        todos={filteredTodos}
        currentFilter={filter}
        filterResultsFn={filterResults}
        clearCompletedFn={clearCompleted}
      />
    </Fragment>
  );
}

export default TodoPrivateList;
export { GET_MY_TODOS };