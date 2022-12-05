import React from 'react'
import { Image } from './Image.jsx'


describe('Playground.cy.js', () => {
  it('playground', () => {
    cy.mount(<Image />)
  })
})