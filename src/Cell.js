// import React, { Componenet } from 'react'




// class Cell extends React.Component{
    
//     state = {
//         color: this.props.value
//     }
    
//     onClick = () => {
//         this.setState ({
//             color: '#333'
//         })
//     }


//     render (){
//     return <div onClick={this.onClick} className='cell' style={{backgroundColor: this.state.color}} ></div>
// }
// }

// export default Cell

import React, { Componenet } from 'react'




class Cell extends React.Component{
    
    state = {
        color: this.props.value
    }
    
    onClick = () => {
        this.setState ({
            color: '#333'
        })
    }


    render (){
    return <div onClick={this.onClick} className='cell' style={{backgroundColor: this.state.color}} ></div>
}
}

export default Cell