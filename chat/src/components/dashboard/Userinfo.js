import React, {Component } from 'react'
import CreateProject from '../projects/CreateProject'
import { connect } from 'react-redux'
 import { compose } from 'redux'
 import { firestoreConnect } from 'react-redux-firebase'
 import { Redirect } from 'react-router-dom'

class Userinfo extends Component {
    state = {
        skills: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { user,auth } = this.props;
        console.log(auth);
        if (!auth.uid) return <Redirect to='/signin' /> 
        return(
            <div className="container" id="all_page">
                <main className="info_id">
                    <section className="empty_space">
                        <div className="row-empty"></div>
                    </section>
                    <section className="image">
                        <div className="user_image">
                            <div className="image_here">
                                {auth.photoURL}
                            </div>
                            <div className="input_img">
                                <input type="file" name="user_image" alt="user_imag"/><br /><br />
                            </div>
                             <span className="text">
                                <b className="bio">Your Moto: Give Shape To Your Dream  </b>
                                
                            </span> 
                        </div>
                    </section>
                    <aside className="user_info">
                        
                        <div className="user_id">
                            <ul className="all_info">
                                <li>Name: {user.firstName} {user.lastName}</li>
                                <li>collage: {user.collageName}</li>
                                <li>batch:{user.branch}</li>
                                <li> year: {user.year}</li>
                                <li>Email_id: {auth.email}</li>
                            </ul>
                        </div>  
                    </aside>
                    <article className="skills">
                        <form className="add_skills" onSubmit={this.handleSubmit}>
                            <input type="text" name="user_skills" onChange={this.handleChange}/>
                        </form>
                        <div className="show_skills">
                             {/* {user.content}  */}
                        </div>
                    </article>
                    <article className="addtodo">
                        <div className="add_todolist">
                            <CreateProject />
                        </div>
                    </article>
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    //console.log(state);
    //  const id = state.firebase.auth.uid;
    //  const users = state.firebase;
    // //  const user = users ? users[id] : null
     return {
         user: state.firebase.profile,
         auth: state.firebase.auth
     }
}
export default compose(connect(mapStateToProps),
  firestoreConnect([{
      collection: 'users'
  }]))(Userinfo);