/* eslint no-undef: ["off"] */
const { expect } = require('chai')
const lib = require('../../lib/index')
lib.toString()

describe('An example test', () => {
  it('to validate that the setup is correct', () => {
    expect(1).to.equal(1)
  })
})
