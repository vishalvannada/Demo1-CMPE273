import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import LeftComp from './components/leftcomp';
import RightComp from './components/rightcomp'

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            projects : [],
        }
    }

    render() {

        const display = (state) => {
            let temp = this.state.projects;
            temp.push(state);
            console.log(temp);
            this.setState({
                projects : temp,
            });
            console.log(state);
            console.log(this.state.projects);
        };

        return (
            <div className="row">
                <LeftComp onAdd={display}/>
                <div className="col-md-1"></div>
                <RightComp name={this.state.projects}/>

            </div>);
    }
}

ReactDOM.render(<Main/>, document.querySelector('.container'));
