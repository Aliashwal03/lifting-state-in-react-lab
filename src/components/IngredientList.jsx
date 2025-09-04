import Ingredient from './ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index}>
          <Ingredient
            ingredient={ingredient}
            onAction={addToBurger}
            actionLabel="+"
          />
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
