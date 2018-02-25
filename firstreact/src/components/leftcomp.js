import React, {Component} from 'react';

import swal from 'sweetalert';

class LeftComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            details: '',
            range: '',
        };
    }

    render() {
        return (
            <div className="custom mh-100 col-md-5 px-5 pb-5 m-5">
                <div class="alert alert-primary p-4" role="alert">
                    <h1>Enter Your Project</h1>
                </div>

                <div className="form-group row">
                    <label for="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.name}
                            className="form-control"
                            id="Name" placeholder="Name"
                            onChange={event => this.setState({name: event.target.value})}
                        />
                    </div>
                    {/*<small className="error col-sm-2"></small>*/}
                    {/*<small className="error pt-1 col-sm-9 float-right text-danger">Please Enter the name of the Project*/}
                    {/*</small>*/}
                </div>

                <div className="form-group row">
                    <label for="Details" className="col-sm-2 col-form-label">Details</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.details}
                            className="form-control" id="Details"
                            placeholder="Details"
                            onChange={event => this.setState({details: event.target.value})}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="Range" className="col-sm-2 col-form-label">Range</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.range} className="form-control"
                            id="Range" placeholder="Range"
                            onChange={event => this.setState({range: event.target.value})}
                        />
                    </div>
                </div>
                <button className="btn btn-primary float-right" onClick={() => this.onAdd()}>Add</button>

            </div>
        );
    }

    onAdd() {

        if (this.state.name !== '' && this.state.details !== '' && this.state.range !== '') {
            this.props.onAdd(this.state);
            this.setState({
                name: '',
                details: '',
                range: ''
            });
        }
        else {
            swal('Please Enter all the details!');
        }
    }
}

export default LeftComp;