import emailsService from '../services/emailsService'

export default (state = [], action) => {
  switch (action.type) {
  case 'SET_EMAILS':
    return action.payload
  default:
    return state
  }
}

export const setEmailsAction = (emails) => ({
  type: 'SET_EMAILS',
  payload: emails
})

export const fetchEmailsAction = () => {
  return async (dispatch) => {
    const emails = await emailsService.get()
    dispatch(setEmailsAction(emails))
  }
}
