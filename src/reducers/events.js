import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
