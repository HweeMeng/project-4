import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Showact from '../components/showact.jsx'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container id ="awesome" maxWidth="md">
        <Showact />
    </Container>,
    document.body.appendChild(document.createElement('div')),
  )
})