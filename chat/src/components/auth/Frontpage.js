import React, { Component } from 'react'
import Cube from './svg/noun_cube.svg'
// import move_div from '../../extra'
//import {StyleSheet, Animated} from 'reavt-native'
// import SignIn from './SignIn'
// import SignUp from './SignUp'
// const styles= StyleSheet.create({
//     div.sign-in {

//     }
// })

class Frontpage extends Component {
    render(){
        return(
            <div className="front-page">
                <header className="star-img">
                    <div className="only-img">
                        <img src="/img/back.jpg" alt="background" className="main-img"/>
                    </div>
                    <div className="cubiod">
                        <img src={Cube} alt="rotating-background" className="rotating-cube"/>
                    </div>
                    <div className="cubiod">
                        <img src={Cube} alt="rotating-background" className="rotating-cube-1"/>
                    </div>
                    <div className="text-name">
                    <div className="text">
                            Active Study
                        </div>
                    </div>
                    <div className="something-new">

                    </div>
                </header>
                <div className="flex-conatiner-1">
                    <section className="sign-up">
                        <div className="sign-up-here">
                            <img src="/img/199.png" alt="signup" className="main-signup"/>
                        </div>
                        <div className="button-signup">
                            <button>SignUp</button>
                        </div>
                    </section>
                    <section className="sign-in" ref="signin">
                        <div className="sign-in-here">
                            <img src="/img/159.png" alt="signin" className="main-signin"/>
                        </div>
                        <div className="button-signin">
                            <button >SignIn</button>
                        </div>
                    </section>
                </div>
                <div className="flex-conatiner-2">
                    <section className="img-text-1">
                        <div className="img-char">
                            <img src="/img/elon.png" alt="elon-musk" className="img-1"/>
                        </div>
                        <div className="text-1">
                            We are what we repeatedly<br />
                            do.Excellence, therefore, is<br />
                            not an act, but a habit.
                        </div>
                    </section>
                    <section className="img-text-2">
                        <div className="img-char">
                            <img src="/img/steve.png" alt="steve-jobs" className="img-2"/>
                        </div>
                        <div className="text-2">
                            My job is not be easy
                            on people. My job is to 
                            make them better.
                        </div>
                    </section>
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
export default Frontpage;