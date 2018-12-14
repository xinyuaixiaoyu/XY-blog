import React , { Component } from 'react';
import './welcome.css';
class Welcome extends Component{
    render(){
        return(
            <div className="welcome">
                    <ul>
                        <li className="title"><span>Welcome to my world.</span></li>
                        <li className="mention"><span>生命在于不断的努力，进取，拼搏。生命不息，优化不止。不忘初心，方得始终。</span></li>
                        <li className="mention"><span>Life lies in continuous efforts, enterprising and hard work. Life is endless, and optimization sis more than enough.Remember your original intention</span></li>
                    </ul>
                    <div>
                        <h1>Colorful</h1>
                        <h1>World</h1>
                    </div>
                    <div className="eat">
                        <p>
                            <i></i>
                        </p>
                        <div>
                            <span className="one" style={{'width':'100px'}}></span>
                            <span className="two"></span>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Welcome;