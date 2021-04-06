import React from 'react'
import { mount } from '@cypress/react'
import { App } from './App.jsx'

it('renders a basic component', () => {
  mount(<App />)
  cy.get('div').contains('Hello Cypress')
})

it('renders a component via React.lazy', () => {
  mount(<App />)
  cy.get('div').contains('This component is lazy loaded.')
})
