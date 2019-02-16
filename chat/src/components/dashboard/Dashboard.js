import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Slideshow from './Slideshow'



class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard-container">
        <div className="img-container">
          <Slideshow />
        </div>
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
        <div className="all-language">
          <div className="specific-lang">
            <ul className="imp-lang">
              <div className="lang-1">
                <div className="lang" id="c-class">
                  <li>C</li>
                </div>
                <div className="lang" id="cpp-class">
                  <li>C++</li>
                </div>
                <div  className="lang" id="webdesign">
                  <li>Web Design</li>
                </div>
              </div>
              <div className="lang-3">
                <div  className="lang" id="datastructure_algo">
                  <li>DataStructure and Algorithum</li>
                </div>
                <div  className="lang" id="database">
                  <li>SQL</li>
                </div>
                <div  className="lang" id="java">
                  <li>Java</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="footter-value">
                    <footer className="all-info">
                        <div className="all-links">
                            <i className="fab fa-html5">HTML5</i>
                            <i className="fab fa-angular">ANGULAR</i>
                            <i className="fas fa-atom">Atom</i>
                            <i className="fab fa-codepen">Codepen</i>
                            <i className="fab fa-css3">Css</i>
                        </div>
                        <div className="regestration">
                            @infinitycorp.  all right reserved
                        </div>
                    </footer>
                </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', limit: 4, orderBy: ['createdAt','desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time','desc'] }
  ])
)(Dashboard)
