import React from 'react'
import { mount } from '@cypress/react'
import { App } from './App.jsx'

it('works', () => {
  mount(<App />)
  cy.get('div').contains('Hello Cypress')
})
