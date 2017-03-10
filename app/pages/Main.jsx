import React from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router'
import {MainTopicGroup} from './components/MainTopicGroup.jsx'

import {newTopicSubmit} from '../actions/Main.js';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.handle_NewSubmit = this.handle_NewSubmit.bind(this);
  };

  handle_NewSubmit(inputTopic){
    this.props.dispatch(newTopicSubmit(inputTopic, this.props.userData.userName));
  }

  render() {
    console.log('enter component in Main')
    let userData = this.props.userData
    let children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(
        child,
        {
          userData: userData
        })
    })

    return(
      <section>
        <section className='section-Main'>
          <h2>WallScape</h2>
          <h4>{this.props.userData.userName}</h4>
          <MainTopicGroup topicData={this.props.topicData} handle_NewSubmit={this.handle_NewSubmit}/>
        </section>
      </section>
    )
    //section not used, remain for demonstrating the usage of children, and illustrating the original design
    //SelfNav was deleted in later version, find in prototype-12-16 or online commit
    /*<section className='section-Self'>
      <SelfNav/>
      {children}
    </section>*/
  }
}

function mapStateToProps (state) {
  return {
    token: state.others.token,
    topicData: state.topicData,
    userData: state.others.userData,
    contentsBucket: state.others.contentsBucket
  }
}

export default connect(mapStateToProps)(
  Main
)
