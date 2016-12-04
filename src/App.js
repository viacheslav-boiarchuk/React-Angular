import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ManageForm from './components/ManagedForm';

class App extends Component {

	onFormSubmit(model) {
		console.log(model);
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<ManageForm onSubmit={this.onFormSubmit} model={{ user: 'Slava', surname:'Boiarchuk', city: 'Kharkiv', email:'some@mail.ru' , password: '123456', gender: 'male', textarea: 'new text here' }}>
					<fieldset className="data">
						<p>
							<label htmlFor="user">Имя</label><br/><input name="user" className="field name" type="text"/>
						</p>
						<p>
							<label htmlFor="surname">Фамилия</label><br/><input name="surname" className="field surname" type="text"/>
						</p>
						<div>
							<p>Дополнительная информация</p>
							<p>
								<label htmlFor="age">Age</label><br/><input name="age" className="field age" type="text"/>
							</p>
							<p>
								<label htmlFor="city">Город</label><br/><input name="city" className="field city" type="text"/>
							</p>
							<p>
								<label htmlFor="email">Эл.почта</label><br/><input name="email" className="field email" type="email"/>
							</p>
							<textarea name="textarea" id="textarea" cols="30" rows="10" value="add some information"/>
						</div>
						<p>
							<label htmlFor="pass">Пароль</label><br/><input name="pass" id="password" className="field password1" type="password"/>
						</p>
					</fieldset>
					<input type="submit" className="submit-btn" value="click"/>
				</ManageForm>
			</div>
		);
	}
}

export default App;
