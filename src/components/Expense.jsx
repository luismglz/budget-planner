import React from 'react'
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

export const Expense = ({expense}) => {

  const {category, name, amount, id, date} = expense;



  return (
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
  )
}


export default Expense