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
			   <div className="row">
			   		<div className="col-lg-12">
			   			<img className="logo-form" src="/assets/img/logo.png" alt="" />
			   		</div>
			   </div>
			   <div className="row">
			   		<div className="col-lg-12">
			   			<div id="steps" className="setup-panel">
				  <div className="step active" data-desc="Información General"> <a href="#step-1" type="button" className="btn btn-success btn-circle">1</a></div>
				  <div className="step" data-desc="Categorización">             <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a></div>
				  <div className="step" data-desc="Ubicación">                  <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a></div>
				  <div className="step" data-desc="Servicios complementarios">  <a href="#step-4" type="button" className="btn btn-default btn-circle" disabled="disabled">4</a></div>
				  <div className="step" data-desc="Horarios">                 <a href="#step-5" type="button" className="btn btn-default btn-circle" disabled="disabled">5</a></div>
				  <div className="step" data-desc="Contacto">                 <a href="#step-6" type="button" className="btn btn-default btn-circle" disabled="disabled">6</a></div>
				</div>
			    <form role="form" className="form-horizontal">
			        <div className="panel panel-primary setup-content" id="step-1">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group control">
			                    <label className="control-label col-sm-2">Nombre comersial</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Descripcion corta (30 max)</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="30" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Descripcion General</label>
			                    <div className="controls col-sm-10">
			                    	<textarea className="form-control custom-control" rows="3" required="required" ></textarea>
			                    </div>
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-2">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group control">
			                    <label className="control-label col-sm-2">Categoria</label>
			                    <div className="controls col-sm-10">
			                    	<select  type="select" className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Sub Categoria</label>
			                    <div className="controls col-sm-10">
			                    	<select  type="select" className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Tags</label>
			                    <div className="controls col-sm-10">
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
			                    		</div>
			                    	</div>
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
			                    		</div>
			                    	</div>	
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
			                    		</div>
			                    	</div>			                    	
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
										    <div className="pretty p-default p-curve">
										        <input type="checkbox" />
										        <div className="state">
										            <label>Default</label>
										        </div>
										    </div>
			                    		</div>
			                    	</div>	
			                    </div>
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-3">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group control">
			                    <label className="control-label col-sm-2">Pais</label>
			                    <div className="controls col-sm-10">
			                    	<select className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Derpamento</label>
			                    <div className="controls col-sm-10">
			                    	<select className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Municipio</label>
			                    <div className="controls col-sm-10">
			                    	<select className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Direccion</label>
			                    <div className="controls col-sm-10">
			                    	<textarea className="form-control custom-control" rows="3" required="required" ></textarea>
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Ubicacion geografica</label>
			                    <div className="controls col-sm-10">
			                    	<select className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Lugar</label>
			                    <div className="controls col-sm-10">
			                    	<select className="form-control" name="category" required="required">
						                <option value="">Seleccione</option>
						                <option value="0">select1</option>
						                <option value="1">select2</option>
						                <option value="2">select3</option>
						            </select> 
			                    </div>
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>
			        
			        <div className="panel panel-primary setup-content" id="step-4">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Tags</label>
			                    <div className="controls col-sm-10">
			                    	<div className="row">
			                    		<div className="col-lg-12">
				                    		<div className=" col-lg-4">
				                    			<div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Parqueo</label>
											        </div>
											    </div>
											</div>
											<div className=" col-lg-4">
											    <div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Aire acondicionado</label>
											        </div>
											    </div>
											</div>
											<div className=" col-lg-4">
											    <div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Acepta trajetas</label>
											        </div>
											    </div>
				                    		</div>
				                    	</div>
				                    </div>
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className=" col-lg-4">
				                    			<div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Permite mascotas</label>
											        </div>
											    </div>
											</div>
											<div className=" col-lg-4">
											    <div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>WIFI</label>
											        </div>
											    </div>
											</div>
											<div className=" col-lg-4">
											    <div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Area Fumadores</label>
											        </div>
											    </div>
											</div>
			                    		</div>
			                    	</div>	
			                    	<div className="row">
			                    		<div className="col-lg-12">
			                    			<div className=" col-lg-4">
				                    			<div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Area de juegos</label>
											        </div>
											    </div>
											</div>
											<div className=" col-lg-4">
											    <div className="pretty p-default p-curve">
											        <input type="checkbox" />
											        <div className="state">
											            <label>Ambiente familiar</label>
											        </div>
											    </div>
											</div>
			                    		</div>
			                    	</div>			                    	
			               	
			                    </div>
			                </div>
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>

			        <div className="panel panel-primary setup-content" id="step-5">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">			           		

			                <div className="row"> 								
								<div className="col-xs-2">
									
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control">
					                     <div className="pretty p-default p-curve">
									        <input type="checkbox" />
									        <div className="state">
									            <label>Siempre abierto</label>
									        </div>
									    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								   <div className="form-group control">
					                     <div className="pretty p-default p-curve">
									        <input type="checkbox" />
									        <div className="state">
									            <label>Horario especifico</label>
									        </div>
									    </div>
					                </div>							
								  </div>												
							</div>	
			                <div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Lunes</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>	
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Martes</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Miercoles</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Jueves</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Viernes</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Sabado</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>
							<div className="row"> 
								<br/>
							</div>
							<div className="row"> 								
								<div className="col-xs-2">
									<label className="control-label">Domingo</label>
								</div>
								  <div className="col-xs-5">								   
								    <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="start" name="start" ng-model="start" type="text" required="required" className="form-control start" />
					                    </div>
					                </div>
								  </div>
								  <div className="col-xs-5">
								  <div className="form-group control bootstrap-timepicker">
					                    <div className="controls col-sm-10">					                    	
					                    	<input id="end" name="end" ng-model="end" type="text" required="required" className="form-control end" />
					                    </div>
					                </div>								
								  </div>												
							</div>	
			                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
			            </div>
			        </div>


			        <div className="panel panel-primary setup-content" id="step-6">
			            <div className="panel-heading">
			                 <h3 className="panel-title">Solicitud de Membresia</h3>
			            </div>
			            <div className="panel-body">
			                <div className="form-group control">
			                    <label className="control-label col-sm-2">Tel.</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Cel.</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">WhatsApp</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Email</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Facebook</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Imstagram</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Pagina web</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Twiter</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <div className="form-group">
			                    <label className="control-label col-sm-2">Youtube</label>
			                    <div className="controls col-sm-10">
			                    	<input maxLength="100" type="text" required="required" className="form-control" placeholder="" />
			                    </div>
			                </div>
			                <button className="btn btn-success pull-right" type="submit">Finish!</button>
			            </div>
			        </div>
			    </form>
			   		</div>
			   </div>
			    
			</div>
		)
	}
}

export default Form
