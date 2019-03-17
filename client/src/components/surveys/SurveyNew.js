import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {

  state = {
    showReview: false
  };

  renderContent() {
    if (this.state.showReview) {
      return <SurveyFormReview 
        onCancel={() => this.setState({ showReview: false })}
      />
    } else {
      return <SurveyForm onSurveySubmit={() => this.setState({showReview: true})} />
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}   
      </div>
    );
  }
}

export default connect(null, null)(reduxForm({
  form: 'surveyForm'
})(SurveyNew));