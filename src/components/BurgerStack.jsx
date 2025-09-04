import Ingredient from './ingredient';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  if (ingredients.length === 0) {
    return <h3>No ingredients added</h3>;
  }

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          <Ingredient
            ingredient={ingredient}
            onAction={removeFromBurger}
            actionLabel="X"
          />
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
