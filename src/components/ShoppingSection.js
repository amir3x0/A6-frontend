import React, { useState } from "react";
import { useShoppingList } from "../pages/shopping/ShoppingListContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ShoppingSection = () => {
  const { shoppingList, setShoppingList } = useShoppingList();
  const [boughtItems, setBoughtItems] = useState([]);
  const [erasedItems, setErasedItems] = useState([]);

  const handleCheckOff = (index) => {
    const item = shoppingList.splice(index, 1)[0];
    setBoughtItems([...boughtItems, item]);
    setShoppingList([...shoppingList]);
  };

  const handleErase = (index) => {
    const item = shoppingList.splice(index, 1)[0];
    setErasedItems([...erasedItems, item]);
    setShoppingList([...shoppingList]);
  };

  const handleUndoBought = (index) => {
    const item = boughtItems.splice(index, 1)[0];
    setShoppingList([...shoppingList, item]);
    setBoughtItems([...boughtItems]);
  };

  const handleUndoErased = (index) => {
    const item = erasedItems.splice(index, 1)[0];
    setShoppingList([...shoppingList, item]);
    setErasedItems([...erasedItems]);
  };

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    // Do nothing if dropped outside the list or no destination is available
    if (!destination) return;

    // Handling reordering within the same list
    if (source.droppableId === destination.droppableId) {
      let reorderedItems = [];
      if (source.droppableId === "shoppingList") {
        reorderedItems = reorder(shoppingList, source.index, destination.index);
        setShoppingList(reorderedItems);
      } else if (source.droppableId === "boughtItems") {
        reorderedItems = reorder(boughtItems, source.index, destination.index);
        setBoughtItems(reorderedItems);
      } else if (source.droppableId === "erasedItems") {
        reorderedItems = reorder(erasedItems, source.index, destination.index);
        setErasedItems(reorderedItems);
      }
    } else {
      // Handling moving between different lists
      const sourceList =
        source.droppableId === "shoppingList"
          ? shoppingList
          : source.droppableId === "boughtItems"
          ? boughtItems
          : erasedItems;
      const destList =
        destination.droppableId === "shoppingList"
          ? shoppingList
          : destination.droppableId === "boughtItems"
          ? boughtItems
          : erasedItems;

      const [movedItem] = sourceList.splice(source.index, 1);
      destList.splice(destination.index, 0, movedItem);

      // Update state based on source and destination IDs
      if (
        source.droppableId === "shoppingList" ||
        destination.droppableId === "shoppingList"
      ) {
        setShoppingList([...shoppingList]);
      }
      if (
        source.droppableId === "boughtItems" ||
        destination.droppableId === "boughtItems"
      ) {
        setBoughtItems([...boughtItems]);
      }
      if (
        source.droppableId === "erasedItems" ||
        destination.droppableId === "erasedItems"
      ) {
        setErasedItems([...erasedItems]);
      }
    }
  };

  // Helper function to reorder the list
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="shoppingList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mb-6"
            >
              {shoppingList.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`item-${item.id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
