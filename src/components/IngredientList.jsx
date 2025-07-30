// src/components/IngredientList.jsx

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      {ingredients.map((item, idx) => (
        <div
          key={idx}
          onClick={() => onAdd(item)}
          style={{
            backgroundColor: item.color,
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
