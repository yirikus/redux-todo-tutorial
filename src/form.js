import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tady Karel, tady Karel',
      period: 'week',
      date: '1970-03-03 03:03:03',
      errors: []
    }
  }

  changeField(fieldName) {
    return function (e) {

      console.log(fieldName + ': ' + e.target.value);
      let state = {};
      state[fieldName] = e.target.value;
      this.setState(state);
    }
  }

  /** tzv kontrolovany input
  */
  changeJob(e){

    console.log(e.target.value);
    this.setState({
      title: e.target.value
    })
  }

  changePeriod(e){

    console.log(e.target.value);
    this.setState({
      period: e.target.value
    })
  }

  formSubmitted(e) {
    e.preventDefault();

    let values = this.state;
    values.description = 'Je to rozbity'
    values.date = this.refs.date.value;

    console.log(this.state);
    console.log(this.refs.date.value);
    $.post('http://skoleni.modrybrouk.cz/react/remindme/api/notice/', values, (data,status) => {
        if (status == 'success') {
            this.props.goToPage(1);
        }
    }).fail((data) => {
      this.setState({
        errors: data.errors
      });
    });
  }

  renderErrors() {
    if (!this.state.errors) {
      return <div>ooops</div>
    } else {
      return this.state.errors.map((error) => {
          return <div className="error">{error.message}</div>
        });
    }
  }

componentDidMount() {
//$(this.refs.input).datepicker();
  $('#datepicker').datepicker({ dateFormat: 'yy-mm-dd 00:00:00' });
}

  render() {

    return <form onSubmit={this.formSubmitted.bind(this)}>
    <hr/>
              <label for="title" >Title</label>
              <input type="text" onChange={this.changeField('title').bind(this)} ref="title" value={this.state.title} name="title"/>
<br/>
              <label for="period" >Period</label>
              <input type="text" onChange={this.changeField('period').bind(this)} ref="period" value={this.state.period} name="period"/>
<br/>
              <label for="date" >Date</label>
              <input ref="date" id="datepicker" defaultValue={this.state.date} type="text"  />
<br/>
              <button type="submit">Cum na to</button>

              {this.renderErrors()}
            </form>
  }
}


/*
export 

*/
