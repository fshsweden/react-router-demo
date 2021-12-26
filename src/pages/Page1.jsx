import { connect } from 'react-redux';
import { Component } from 'react';

class Page1 extends Component {

    render() {
      return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Page1</h2>
          <p>Count is: {this.props.count}</p>
        </main>
      );
  }
}

const mapStateToProps = state => {
  return {
    count: state
  };
};
export default connect(mapStateToProps)(Page1);
