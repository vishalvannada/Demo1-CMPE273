import React, {Component} from 'react';


class RightComp extends Component {

    render() {
        return (
            <div className="col-md-4 mt-5">
                <div class="alert alert-primary" role="alert">
                    <h3>Your Projects are listed here</h3>
                </div>
                <div >
                    <ul className="list-group list-group-flush">
                        {this.props.name.map((project) =>
                            <div className="border border-primary">
                                <li className="list-group-item p-2">Name : {project.name}</li>
                                <li className="list-group-item p-2">Details : {project.details}</li>
                                <li className="list-group-item p-2">Range : {project.range}</li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RightComp;