import React from 'react'
import { FormControl } from '@material-ui/core'

import { withModel } from '@/common/hocs/withModel'
import { withReducer } from '@/common/hocs/withReducer'

import { AddItemField } from '../components/AddItemField'
import * as actions from '../reducer/actions'

class Model {
  constructor({ actions, state, ...props }) {
    this.props = props
    this.actions = actions
    this.state = state
  }

  addIntegration(value) {
    console.log(this.props)
    console.log(this.actions)
    console.log(this.state)
    console.log(value)
  }
}

// @withReducer(actions)
// @withModel(Model)
function Form({ model }) {
  return (
    <FormControl>
      <AddItemField onItemAdd={(input) => model.addIntegration(input.value)} />
    </FormControl>
  )
}

export const CountersForm = withReducer(actions)(withModel(Model)(Form))
