import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          todos: [
              {
                  task: 'Learn React Native',
              },
              {
                  task: 'Learn something else',
              },
          ],
      };
  }

  onAddStarted() {
      this.nav.push(
          {
              name: 'taskform',
          });
  }

  onAdd(task) {
      this.state.todos.push({ task });
      this.setState({ todos: this.state.todos });
      this.nav.pop();
  }

  onCancel() {
      this.nav.pop();
  }

  onDone(todo) {
      const filteredTodos = this.state.todos.filter((filterTodo) => {
          return filterTodo !== todo;
      });
      this.setState({ todos: filteredTodos });
  }

  renderScene(route, nav) {
      switch (route.name) {
      case 'taskform':
          return (
                <TaskForm
                    onAdd={this.onAdd.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                />
              );
      default:
          return (
            <TaskList
                onDone={this.onDone.bind(this)}
                onAddStarted={this.onAddStarted.bind(this)}
                todos={this.state.todos}
            />
          );
      }
  }

  configureScene() {
      return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
      return (
          <Navigator
              configureScene={this.configureScene}
              initialRoute={{ name: 'tasklist', index: 0 }}
              ref={(nav) => { this.nav = nav;}}
              renderScene={this.renderScene.bind(this)}
          />
      );
  }
}
