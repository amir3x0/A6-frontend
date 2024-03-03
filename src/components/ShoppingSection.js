import React, { useState } from "react";
import { useShoppingList } from "../context/ShoppingListContext";

const ShoppingSection = () => {
  const { shoppingList, setShoppingList } = useShoppingList();
  const [boughtItems, setBoughtItems] = useState([]);
  const [erasedItems, setErasedItems] = useState([]);

  const handleCheckOff = (index) => {
    const item = shoppingList[index];
    setBoughtItems((prevBoughtItems) => [...prevBoughtItems, item]);
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const handleErase = (index) => {
    const item = shoppingList[index];
    setErasedItems((prevErasedItems) => [...prevErasedItems, item]);
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const handleUndoBought = (index) => {
    const item = boughtItems[index];
    setShoppingList((prevShoppingList) => [...prevShoppingList, item]);
    setBoughtItems(boughtItems.filter((_, i) => i !== index));
  };

  const handleUndoErased = (index) => {
    const item = erasedItems[index];
    setShoppingList((prevShoppingList) => [...prevShoppingList, item]);
    setErasedItems(erasedItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
      <div className="mb-6">
        {shoppingList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow transition-all hover:bg-gray-50"
          >
            <span>{`${item.name} - ${item.quantity} ${item.unit}`}</span>
            <div>
              <button
                className="text-green-600 hover:text-green-800 mr-2"
                onClick={() => handleCheckOff(index)}
              >
                ✓
              </button>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleErase(index)}
              >
                ✗
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-3">Bought Items</h3>
      {/* Bought Items listing */}
      {boughtItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-2 p-2 bg-green-100 rounded"
        >
          <span>{`${item.name} - ${item.quantity} ${item.unit}`}</span>
          <button onClick={() => handleUndoBought(index)}>Undo</button>
        </div>
      ))}
      <h3 className="text-2xl font-semibold mb-3">Erased Items</h3>
      {/* Erased Items listing */}
      {erasedItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-2 p-2 bg-red-100 rounded"
        >
          <span>{`${item.name} - ${item.quantity} ${item.unit}`}</span>
          <button onClick={() => handleUndoErased(index)}>Undo</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingSection;
