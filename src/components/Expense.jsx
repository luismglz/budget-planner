import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'
import { dateFormat } from '../helpers';

import ExpensesIcon from '../img/icon_expenses.svg'
import FoodIcon from '../img/icon_food.svg'
import HealthIcon from '../img/icon_health.svg'
import HouseIcon from '../img/icon_house.svg'
import LeisureIcon from '../img/icon_leisure.svg'
import SubscriptionsIcon from '../img/icon_subscriptions.svg'
import SavingIcon from '../img/icon_saving.svg'

const iconsDictionary = {
  saving: SavingIcon,
  food: FoodIcon,
  house: HouseIcon,
  miscellaneous: ExpensesIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon
}

export const Expense = ({ expense, setEditExpense }) => {

  const {category, name, amount, id, date} = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={()=> setEditExpense(expense)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={()=>{console.log('remove')}}>
        Delete
      </SwipeAction>
    </TrailingActions>
  )



  return (
    <SwipeableList>
      <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}>
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img 
          src={iconsDictionary[category]}
          alt="Icon Expense"
        />
        <div className='descripcion-gasto'>
          <p className='categoria'> {category }</p>
          <p className='nombre-gasto'>{name }</p>
          <p className='fecha-gasto'>Added on: {' ' }
            <span>{dateFormat(date)}</span>
          </p>
        </div>
      </div>
      <p className='cantidad-gasto'>
        ${amount}
      </p>
    </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}


export default Expense