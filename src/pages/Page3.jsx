import { connect } from 'react-redux';
import { Component } from 'react';

class Page3 extends Component {

    constructor(props) {
      super(props)
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        console.log("CLICK");
        this.props.dispatch({ type: 'INCREMENT' });
    }

    render() {
      return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Page3</h2>
          <p>Value is {this.props.count}</p>
          
          <button onClick={this.handleClick}>CLICK ME</button>
        </main>
      );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps " + state);
  return {
    count: state
  };
};
export default connect(mapStateToProps)(Page3);
