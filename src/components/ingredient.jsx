import { useState } from 'react'

const Ingredient = ({ingredient, onAction, actionLabel}) => {

return (
    <ul
    style={{ backgroundColor: ingredient.color }}>
        <li>
        <span>{ingredient.name}</span>
        <button onClick={() => onAction(ingredient)}>{actionLabel}</button>
        </li>
    </ul>
)
}

export default Ingredient