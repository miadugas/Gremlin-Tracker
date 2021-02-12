import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const App = () => {
	return (
		<div className='app'>
			<h1>Gremlin Tracker</h1>
			<p>React/Electron app that uses a MongoDB Atlas database to keep track of system gremlins and bugs for remote teams.</p>
		</div>
	)
}

export default App
