import React from 'react';
import Rest from './rest';

export default class RemindList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items:[]
      
      }
  }

  componentWillMount() {
    setTimeout(() => {
    console.log('RemindList willmount');
    Rest.getRemindList().then(
        (data) => {
          console.log(data);

            this.setState({
              items: data.data.data
            });
        } ).catch((error) => {
          throw new Error('fu remindlist');
        })
      }, 1000);
  }

  render() {
    return (
      <div>
      <h1>hai</h1>
      <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>date</th>
          <th>period</th>
          <th>ations</th>
        </tr>
        </thead>
        <tbody>
        {this.renderItems()}
        </tbody>
      </table>
      </div>
    )
  }

  renderItems(){
    if (this.state.items.length) {
    return this.state.items.map((item) => {
      return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.date}</td>
        <td>{item.period}</td>
        <td><a href=""> delete </a></td>
      </tr>
    });
  } else {
    return <tr><td colSpan="4">Loading...</td></tr>
  }
}
}
