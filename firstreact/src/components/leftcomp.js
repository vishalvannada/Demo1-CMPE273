import React, {Component} from 'react';

import swal from 'sweetalert';

class LeftComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            details: '',
            range: '',
            touched: {
                name : false,
                details : false,
                range : false
            }
        };
    }

    validate(name, details, range) {
        // true means invalid, so our conditions got reversed
        return {
            name: name.length === 0,
            details: details.length === 0,
            range: range.length === 0
        };
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    render() {

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };

        const errors = this.validate(this.state.name, this.state.details, this.state.range);

        const isEnabled = !Object.keys(errors).some(x => errors[x]);

        return (
            <div className="custom mh-100 col-md-5 px-5 pb-5 m-5">
                <div class="alert alert-primary p-4" role="alert">
                    <h1>Enter Your Project</h1>
                </div>

                <div className="form-group pt-3 row">
                    <label for="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.name}
                            className={shouldMarkError('name') ? "form-control is-invalid" : "form-control"}
                            onBlur={this.handleBlur('name')}
                            id="Name" placeholder="Name"
                            onChange={event => this.setState({name: event.target.value})}
                        />
                    </div>
                    <small className={shouldMarkError('name') ? "error col-sm-2" : "not-display"}></small>
                    <small className={shouldMarkError('name') ? "error col-sm-9 float-right text-danger " : "not-display"}>Please Enter the name of the Project
                    </small>
                </div>

                <div className="form-group row">
                    <label for="Details" className="col-sm-2 col-form-label">Details</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.details}
                            className={shouldMarkError('details') ? "form-control is-invalid" : "form-control"}
                            onBlur={this.handleBlur('details')}
                            id="Details"
                            placeholder="Details"
                            onChange={event => this.setState({details: event.target.value})}
                        />
                    </div>
                    <small className={shouldMarkError('details') ? "error col-sm-2" : "not-display"}></small>
                    <small className={shouldMarkError('details') ? "error col-sm-9 float-right text-danger " : "not-display"}>Please Enter the details of the project
                    </small>
                </div>

                <div className="form-group row">
                    <label for="Range" className="col-sm-2 col-form-label">Range</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.range}
                            onBlur={this.handleBlur('range')}
                            className={shouldMarkError('range') ? "form-control is-invalid" : "form-control"}
                            id="Range" placeholder="Range"
                            onChange={event => this.setState({range: event.target.value})}
                        />
                    </div>
                    <small className={shouldMarkError('range') ? "error col-sm-2" : "not-display"}></small>
                    <small className={shouldMarkError('range') ? "error col-sm-9 float-right text-danger " : "not-display"}>Please Enter the range of the project
                    </small>
                </div>
                <button disabled={!isEnabled} className="btn btn-primary float-right" onClick={() => this.onAdd()}>Add
                </button>

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