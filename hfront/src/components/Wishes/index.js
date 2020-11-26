import React from 'react'
import ChooseDisplay from './ChooseDisplay'
import { compareAsc } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWishesAction } from '../../redux/wishReducer'

const WishesList = () => {
  const wishes = useSelector(state => state.wishes)
  const dispatch = useDispatch()

  const updateWishes = () => {
    dispatch(fetchWishesAction())
  }

  return (
    <div>
      <div className="no-print">
        <button onClick={() => updateWishes()}>Päivitä näkymä</button>
      </div>

      {wishes.length !== 0 && wishes
        .sort((a, b) => compareAsc(a.date, b.date))
        .map((wish, index) => (
          <ChooseDisplay key={wish.id} wish={wish} index={index} />
        )
        )}
      {wishes.length === 0 &&
        <div>
          <h2>Kukaan asiakas ei ole vielä täyttänyt lomaketta</h2>
          <hr />
        </div>
      }
    </div>
  )
}

export default WishesList
