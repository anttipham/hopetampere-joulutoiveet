import wishesService from '../services/wishesService'

export default (state = [], action) => {
  switch (action.type) {
  case 'SET_WISHES':
    return action.payload
  default:
    return state
  }
}

export const setWishesAction = (wishes) => ({
  type: 'SET_WISHES',
  payload: wishes.map(wish => ({
    ...wish,
    date: new Date(wish.date)
  }))
})

export const fetchWishesAction = () => {
  return async (dispatch) => {
    const wishes = await wishesService.get()
    dispatch(setWishesAction(wishes))
  }
}
