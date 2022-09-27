import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { Try } from './Try.js'

const container = document.querySelector('#try')
if (!container) {
  throw new Error('No container')
}
const root = createRoot(container)
root.render(
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Try
        defaultExpressionText={'there is/are {int} flight(s) from {airport}'}
        defaultStepText={'there are 12 flights from LHR'}
        defaultParameters={[{ name: 'airport', regexp: '[A-Z]{3}' }]}
      />
    </QueryParamProvider>
  </Router>
)
