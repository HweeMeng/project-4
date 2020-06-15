import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Logout from '../components/logout.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container id ="logout" maxWidth="md">
        <Logout />
    </Container>,
    document.body.appendChild(document.createElement('div')),
  )
})