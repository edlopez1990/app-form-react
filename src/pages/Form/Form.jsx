import React, {Component} from 'react'

class Form extends Component {
	constructor(props){
		super(props)

		this.state = {
			stado:0
		}
	}	

	render(){
		return( 
			<div className="form-style-5">
				<form>
					<fieldset>
					<legend><span className="number">1</span> Nombre Comersial</legend>

					<label for="job">Categorias:</label>
						<select id="job" name="field4">
							<optgroup label="Categoria Principal">
							  <option value="fishkeeping">Restaurante</option>
							  <option value="reading">Alojamiento</option>
							  <option value="boxing">Recración</option>
							  <option value="debate">Agencia de Viaje</option>
							  <option value="gaming">Operador turistico</option>
							  <option value="snooker">Aventura</option>
							</optgroup>
							<optgroup label="Categoria Secundaria">
							  <option value="fishkeeping">Restaurante</option>
							  <option value="reading">Alojamiento</option>
							  <option value="boxing">Recración</option>
							  <option value="debate">Agencia de Viaje</option>
							  <option value="gaming">Operador turistico</option>
							  <option value="snooker">Aventura</option>
							</optgroup>
						</select>   
					<label for="job">Clasificación de las Categorias:</label>
						<select id="job" name="field4">
							<optgroup label="Restaurante">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
							<optgroup label="Recreación">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
							<optgroup label="Operador turistico">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
							<optgroup label="Alojamiento">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
							<optgroup label="Agencia de viaje">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
							<optgroup label="Aventura">
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							  <option value="fishkeeping">Loremp ipsum</option>
							</optgroup>
						</select>  
  

					<label for="job">Tarjetas aceptadas en el establecimiento:</label>
					<input type="text" name="field1" placeholder="Dirección " />
					<input type="text" name="field1" placeholder="Ciudad / pueblo " />
					<input type="email" name="field2" placeholder="Departamento" />
					<input type="email" name="field2" placeholder="Pais" />
					<label for="job">Ubicacion geografica:</label>
					<select id="job" name="field4">
							<optgroup label="">
							  <option value="fishkeeping">playa, estero  y bahia</option>
							  <option value="reading">Lagos / Lagunas</option>
							  <option value="boxing">Montañas / cerros</option>
							  <option value="debate">Ciudad</option>
							  <option value="gaming">Pueblo</option>
							</optgroup>
						</select>  
					<input type="email" name="field2" placeholder="Telefono" />
					<input type="email" name="field2" placeholder="Celular" />
					<input type="email" name="field2" placeholder="Email" />
					<input type="email" name="field2" placeholder="Whatsapp institucional" />
					<input type="email" name="field2" placeholder="Pagina Web" />
					<input type="email" name="field2" placeholder="Instagram" />
					<input type="email" name="field2" placeholder="Facebook" />
					<input type="email" name="field2" placeholder="Logotipo completo" />
					</fieldset>
				
					<input type="submit" value="Enviar" />
				</form>
			</div>
		)
	}
}

export default Form
