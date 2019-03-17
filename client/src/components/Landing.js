import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Landing = (props) => {
  if (props.auth) {
    return <Redirect to="/surveys" />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily</h1>
      Collect feedback from your users
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(Landing);