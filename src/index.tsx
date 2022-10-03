import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { Try } from './Try.js'

const container = document.querySelector('#try')
if (!container) {
  throw new Error('No container')
}
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route
          path="/"
          element={
            <Try
              defaultExpressionText={'there is/are {int} flight(s) from {airport}'}
              defaultStepText={'there are 12 flights from LHR'}
              defaultParameters={[{ name: 'airport', regexp: '[A-Z]{3}' }]}
            />
          }
        />
      </Routes>
    </QueryParamProvider>
  </BrowserRouter>
)
