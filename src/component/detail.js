import React ,{ Component }  from 'react';

class Detail extends Component{
    render(){
        console.log(this.props)
        return(
            <div>{this.props.match.params.cid}</div>
        )
    }
}
export default Detail;