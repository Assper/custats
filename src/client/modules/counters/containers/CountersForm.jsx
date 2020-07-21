import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '@/client/common/hooks/useActions'
import { useModel } from '@/client/common/hooks/useModel'

import { NAME as COUNTERS_NAME, actions as countersActions } from '../reducers/counters'
import { NAME as INTEGRATIONS_NAME, actions as integrationsActions } from '../reducers/integrations'

import { StorageManager } from '../helpers/StorageManager'
import { IntegrationsValidator } from '../helpers/IntegrationsValidator'
import { CountersModel } from '../models/CountersModel'
import { IntegrationsModel } from '../models/IntgretionsModel'

import {
  CountsBar,
  IntegrationsList,
  IntegrationsTopBar
} from '../components'

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
    countsModel.getAllUsersCount(true)
    countsModel.getUsersCount([], true)
    countsModel.getFilters()
  }, [])

  const handleAllUsersCount = useCallback(() => countsModel.getAllUsersCount())
  const handleAddItem = useCallback((input) => intsModel.add(input.value), [intsModel])

  const handleCount = useCallback(() => {
    const names = integrations.reduce((acc, { name, isSelected }) => isSelected && acc.concat(name), [])
    countsModel.getUsersCount(names)
  }, [countsModel, state])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <CountsBar
        users={users}
        allUsers={allUsers}
        onItemAdd={handleAddItem}
        onAllUsersCount={handleAllUsersCount}
      />
      <IntegrationsTopBar
        filters={filters}
        onImportFilter={() => countsModel.setFilters({ imported: !filters.imported })}
        onPublisherFilter={() => countsModel.setFilters({ publisher: !filters.publisher })}
        onCount={() => !users.isFetching && handleCount()}
        onSelectAll={({ checked }) => intsModel.selectAll(checked)}
      />
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
