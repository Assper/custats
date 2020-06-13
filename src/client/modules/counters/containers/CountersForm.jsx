import React, { useEffect } from 'react'
import { FormControl, Typography, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { useActions } from '@/client/common/hooks/useActions'
import { useModel } from '@/client/common/hooks/useModel'

import { NAME as COUNTERS_NAME, actions as countersActions } from '../reducers/counters'
import { NAME as INTEGRATIONS_NAME, actions as integrationsActions } from '../reducers/integrations'

import { CountersModel } from '../models/CountersModel'
import { IntegrationsListModel } from '../models/IntgretionslistModel'
import { AddItemField } from '../components/AddItemField'
import { IntegrationsList } from '../components/IntegrationsList'

export function CountersForm(props = {}) {
  const state = useSelector(state => state)
  const countsActions = useActions(countersActions)
  const intsActions = useActions(integrationsActions)
  const countsModel = useModel(CountersModel, [{
    ...props,
    state: state[COUNTERS_NAME],
    actions: countsActions
  }])

  const intsModel = useModel(IntegrationsListModel, [{
    ...props,
    state: state[INTEGRATIONS_NAME],
    actions: intsActions
  }])

  const { allUsers } = state[COUNTERS_NAME]
  const { integrations } = state[INTEGRATIONS_NAME]

  // useEffect(() => {
  //   countersModel.getAllUsersCount()
  // }, [])

  return (
    <FormControl>
      {allUsers.isFetching && <CircularProgress />}
      {!allUsers.isFetching && <Typography type="h3">{allUsers.count}</Typography>}
      {allUsers.error && <Typography type="h3" color="error">{allUsers.error}</Typography>}
      <AddItemField onItemAdd={(input) => intsModel.add(input.value)} />
      <IntegrationsList
        names={integrations}
        onEdit={(_, i) => intsModel.edit(i)}
        onDelete={(_, i) => intsModel.delete(i)}
      />
    </FormControl>
  )
}
