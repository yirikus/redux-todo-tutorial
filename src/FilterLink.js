import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';

class FilterLink extends React.Component {
    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }
  
    render() {
      const props = this.props;
      const {store} = this.context;
      const state = store.getState();
  
      const onFilterClick = () =>
        store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: props.filter });
  
      return <Link active={props.filter === state.visibilityFilter}
        onClick={onFilterClick}>{props.children}</Link>
    }
  }
  FilterLink.contextTypes = {
    store: React.PropTypes.object
  };

  export default FilterLink;