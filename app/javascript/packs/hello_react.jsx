// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const Hello = props => (
  <div>
  <Container id ="awesome" maxWidth="md">
  Hello {props.name}!
  <p>
  Awesome!
  </p>
  <Button variant="contained" color="primary">
     Hello World
  </Button>
  </Container>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})