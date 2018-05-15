import React, {Component} from 'react'
import '../../assets/css/pages/steps.css';
import '../../assets/js/js.js';
class Form extends Component {
	constructor(props){
		super(props)

		this.state = {
			stado:0
		}
	}	

	render(){
		return( 
			<div className="container">
			   
			    <div id="steps" className="setup-panel">
				  <div className="step" data-desc="Listing information"><a href="#step-1" type="button" className="btn btn-success btn-circle">1</a></div>
				  <div className="step" data-desc="Photos & Details"><a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a></div>
				  <div className="step active" data-desc="Review & Post"><a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a></div>
				  <div className="step" data-desc="Your order"><a href="#step-4" type="button" className="btn btn-default btn-circle" disabled="disabled">4</a></div>
				</div>
			    <form role="form">
			        <div className="panel panel-primary setup-content" id="step-1">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Shipper</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group">
			                    <label className="control-label">First Name</label>
			                    <input maxLength="100" type="text" required="required" className="form-control" placeholder="Enter First Name" />
			                </div>
			                <div className="form-group">
			                    <label className="control-label">Last Name</label>
			                    <input maxLength="100" type="text" required="required" className="form-control" placeholder="Enter Last Name" />
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-2">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Destination</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group">
			                    <label className="control-label">Company Name</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
			                </div>
			                <div className="form-group">
			                    <label className="control-label">Company Address</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-3">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Schedule</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group">
			                    <label className="control-label">Company Name</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
			                </div>
			                <div className="form-group">
			                    <label className="control-label">Company Address</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-4">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Cargo</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group">
			                    <label className="control-label">Company Name</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
			                </div>
			                <div className="form-group">
			                    <label className="control-label">Company Address</label>
			                    <input maxLength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
			                </div>
			                <button className="btn btn-success pull-right" type="submit">Finish!</button>
			            </div>
			        </div>
			    </form>
			</div>
		)
	}
}

export default Form
