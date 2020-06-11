import React from 'react'
import { FormControl, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { useActions } from '@/common/hooks/useActions'
import { useModel } from '@/common/hooks/useModel'

import { NAME } from '../reducer'
import * as countersActions from '../reducer/actions'
import { AddItemField } from '../components/AddItemField'
import { CountersModel } from '../models/CountersModel'

export function CountersForm(props = {}) {
  const state = useSelector(state => state)
  const actions = useActions(countersActions)
  const model = useModel(CountersModel, [{ ...props, state, actions }])

  return (
    <FormControl>
      <Typography variant="h2">{state[NAME].usersCount}</Typography>
      <AddItemField onItemAdd={(input) => model.addIntegration(input.value)} />
    </FormControl>
  )
}
