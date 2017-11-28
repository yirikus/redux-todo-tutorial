import React from 'react';
import Form from './form';
import RemindList from './remindList';

export default (props) => {
  if(props.page == 1) {
    return <RemindList/>
  } else if (props.page == 2) {
    return <Form defaultJob={props.job} defaultAge={props.age} goToPage={props.goToPage} />
  } else {
    return <div> Bobek </div>
  }
}
