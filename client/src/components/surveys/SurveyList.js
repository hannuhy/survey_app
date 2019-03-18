import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import './surveyList.css';

class SurveyList extends Component {
  
  state = {
    sorting: {
      key: 'dateSent',
      direction: 'desc'
    }
  }

  componentDidMount() {
    this.props.fetchSurveys();
  }

  toggleSort(newKey) {
    const { key, direction } = this.state.sorting;
    let newDirection;
    if (key === newKey) {
      newDirection = direction === 'asc' ? 'desc' : 'asc';
    } else {
      newDirection = 'asc';
    }
    this.setState({
      sorting: {
        key: newKey,
        direction: newDirection
      }
    })
  }

  sortSurveys() {
    const { key, direction } = this.state.sorting;
    this.props.surveys.sort((a,b) => {
      const valueA = a[key] ? a[key].toLowerCase() : '';
      const valueB = b[key] ? b[key].toLowerCase() : '';
      if (direction === 'asc') {
        if (valueA < valueB) return -1; 
        if (valueA > valueB) return 1;
        return 0;
      } else {
        if (valueA < valueB) return 1; 
        if (valueA > valueB) return -1;
        return 0;
      }
    });
  }

  renderHeader() {
    const { key, direction } = this.state.sorting;
    return (
      <div className="row" style={{marginTop: '20px'}}>
        <div className="col s3" style={{display: 'flex'}}>

          <span onClick={() => this.toggleSort('title')} className="ColumnHeader">Title</span>
          {key === 'title' ? 
              direction === 'asc' 
              ? <i className="material-icons">arrow_drop_down</i>
              : <i className="material-icons">arrow_drop_up</i>
          : null}
        </div>
        <div className="col s3" style={{display: 'flex'}}>
          <span onClick={() => this.toggleSort('dateSent')} className="ColumnHeader">Date sent</span>
          {key === 'dateSent' ? 
              direction === 'asc' 
              ? <i className="material-icons">arrow_drop_down</i>
              : <i className="material-icons">arrow_drop_up</i>
          : null}
        </div>
        <div className="col s3" style={{display: 'flex'}}>
          <span onClick={() => this.toggleSort('lastResponded')} className="ColumnHeader">Last responded</span>
          {key === 'lastResponded' ? 
              direction === 'asc' 
              ? <i className="material-icons">arrow_drop_down</i>
              : <i className="material-icons">arrow_drop_up</i>
          : null}
        </div>
      </div>
    )
    
  }

  renderSurveys() {
    this.sortSurveys();
    return this.props.surveys.map(survey => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content">
            <span 
              onClick={() => this.props.deleteSurvey(survey._id)} 
              className="btn-floating right btn-small red">
                <i className="material-icons">delete</i>
            </span>
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <p>
              Last Response: {survey.lastResponded 
                ? new Date(survey.lastResponded).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
          <div className="card-action blue-grey darken-2">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="divider"></div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);