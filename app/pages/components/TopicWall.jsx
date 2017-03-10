import React from 'react';
import {ContentRow} from './ContentRow.jsx'
import {ContentShow} from './ContentShow.jsx'
import {ContentCreate} from './ContentCreate.jsx'

export class TopicWall extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowingContent: false,
      rowShowing: null,
      indexShowing: null
    }
    this.handle_Click_Brick = this.handle_Click_Brick.bind(this);
  }

  handle_Click_Brick(brickIndex, brickRow){
    let topicId = this.props.topicId;
    let topicThis = this.props.topicData[topicId];
    if(this.state.isShowingContent){
      this.state.indexShowing !== brickIndex ?
      this.setState({
        indexShowing: brickIndex
      }) :
      this.setState({
        isShowingContent: false,
        rowShowing: null,
        indexShowing: null
      })
    }else{
      this.setState({
        isShowingContent: true,
        rowShowing: brickRow,
        indexShowing: brickIndex
      })
    }
  }

  render() {
    console.log('enter TopicWall')
    let topicId = this.props.topicId;
    let topicThis = this.props.topicData[topicId];

    return(
      <div className='topic-wall'>
        {
          !this.state.isShowingContent &&
          <div>
            <ContentRow id="rowOne" class="row" rowRecord = {topicThis[1]} topicId = {topicId} handle_Click_Brick = {this.handle_Click_Brick} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}>
              <ContentCreate handle_dispatch_newBrickSubmit={this.props.handle_dispatch_newBrickSubmit}/>
            </ContentRow>
            <ContentRow id="rowTwo" class="row" rowRecord = {topicThis[2]} topicId = {topicId} handle_Click_Brick = {this.handle_Click_Brick} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
            <ContentRow id="rowThree" class="row" rowRecord = {topicThis[3]} topicId = {topicId} handle_Click_Brick = {this.handle_Click_Brick} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
            <ContentRow id="rowFour" class="row-four" rowRecord = {topicThis[4]} topicId = {topicId} handle_Click_Brick = {this.handle_Click_Brick} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
          </div>
        }
        {
          this.state.isShowingContent &&
          <div>
            <ContentRow class="row" rowRecord = {topicThis[this.state.rowShowing]} topicId = {topicId} handle_Click_Brick = {this.handle_Click_Brick} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
            <ContentShow brickRecord = {topicThis[this.state.rowShowing][this.state.indexShowing]} rowShowing = {this.state.rowShowing} indexShowing = {this.state.indexShowing} handle_dispatch_brickContentSubmit={this.props.handle_dispatch_brickContentSubmit}/>
          </div>
        }
      </div>
    )
  }
}
