import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  Typography,
  CircularProgress,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

import { useActions } from '@/client/common/hooks/useActions'
import { useModel } from '@/client/common/hooks/useModel'

import { NAME as COUNTERS_NAME, actions as countersActions } from '../reducers/counters'
import { NAME as INTEGRATIONS_NAME, actions as integrationsActions } from '../reducers/integrations'

import { StorageManager } from '../helpers/StorageManager'
import { IntegrationsValidator } from '../helpers/IntegrationsValidator'
import { CountersModel } from '../models/CountersModel'
import { IntegrationsModel } from '../models/IntgretionsModel'
import { AddItemField } from '../components/AddItemField'
import { IntegrationsList } from '../components/IntegrationsList'

const storage = new StorageManager()
const validator = new IntegrationsValidator()

export function CountersForm(props = {}) {
  const state = useSelector(state => state)
  const countsActions = useActions(countersActions)
  const intsActions = useActions(integrationsActions)
  const countsModel = useModel(CountersModel, [
    {
      ...props,
      state: state[COUNTERS_NAME],
      actions: countsActions
    },
    storage
  ])

  const intsModel = useModel(IntegrationsModel, [
    {
      ...props,
      state: state[INTEGRATIONS_NAME],
      actions: intsActions
    },
    storage,
    validator
  ])

  const { allUsers, users, filters } = state[COUNTERS_NAME]
  const { integrations } = state[INTEGRATIONS_NAME]

  useEffect(() => {
    intsModel.getIntegrations()
    countsModel.getAllUsersCount()
    countsModel.getFilters()
  }, [])

  const handleAddItem = useCallback((input) => intsModel.add(input.value), [intsModel])

  const handleCount = useCallback(() => {
    const names = integrations.reduce((acc, { name, isSelected }) => isSelected && acc.concat(name), [])
    countsModel.getUsersCount(names)
  }, [countsModel, state])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {users.isFetching && <CircularProgress />}
      {!users.isFetching && <Typography type="h3">Counted Users: {users.count}</Typography>}
      {users.error && <Typography type="h3" color="error">All Users: {users.error}</Typography>}

      {allUsers.isFetching && <CircularProgress />}
      {!allUsers.isFetching && <Typography type="h3">{allUsers.count}</Typography>}
      {allUsers.error && <Typography type="h3" color="error">{allUsers.error}</Typography>}
      <FormGroup row>
        <AddItemField onItemAdd={handleAddItem} />
        <FormControlLabel
          label="Imported"
          control={
            <Checkbox
              checked={filters.imported}
              onChange={() => countsModel.setFilters({ imported: !filters.imported })}
              name="imported"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Publisher"
          control={
            <Checkbox
              checked={filters.publisher}
              onChange={() => countsModel.setFilters({ publisher: !filters.publisher })}
              name="publisher"
              color="primary"
            />
          }
        />
        <Button
          onClick={() => !users.isFetching && handleCount()}
          variant="contained"
          color="primary"
        >
          Count
        </Button>
      </FormGroup>
      <IntegrationsList
        integrations={integrations}
        onEdit={(_, i) => intsModel.edit(i)}
        onDelete={(_, i) => intsModel.delete(i)}
        onSelect={({ isSelected }, i) => intsModel.select(!isSelected, i)}
        onCancel={(_, i) => intsModel.editCancel(i)}
        onConfirm={({ name }, i) => intsModel.editConfirm(name, i)}
      />
    </form>
  )
}
