import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

// const ROOT_URL = 'https://xxx.xxx.com/api/v1'
// const QUERYSTRING = '?token=xxx'
const dummyEvents = `${process.env.PUBLIC_URL}/data/dummyEvents.json`

export const readEvents = () => async (dispatch) => {
  // const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  const response = await axios.get(dummyEvents)
  dispatch({ type: READ_EVENTS, response })
}
