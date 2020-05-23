import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

// const ROOT_URL = 'https://xxx.xxx.com/api/v1'
// const QUERYSTRING = '?token=token123'

export const readEvents = () => async (dispatch) => {
  // const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  const response = await axios.get(
    `${process.env.PUBLIC_URL}/data/dummyEvents.json`
  )
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = (values) => async (dispatch) => {
  // const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  const response = await axios.get(
    `${process.env.PUBLIC_URL}/data/dummyEvents.json`
  )
  dispatch({ type: CREATE_EVENT, response })
}
