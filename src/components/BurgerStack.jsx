// src/components/BurgerStack.jsx

const BurgerStack = ({ stack }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      {stack.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: item.color,
            padding: '10px',
            margin: '5px',
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BurgerStack;
