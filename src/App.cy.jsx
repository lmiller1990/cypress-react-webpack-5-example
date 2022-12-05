import React from 'react'
import { App } from './App.jsx'

it('renders a basic component', () => {
  cy.mount(<App />)
  cy.get('div').contains('Hello Cypress')
})

it('renders a component via React.lazy', () => {
  cy.mount(<App />)
  cy.get('div').contains('This component is lazy loaded.')
})
