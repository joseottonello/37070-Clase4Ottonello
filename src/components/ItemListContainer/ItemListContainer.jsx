import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {  
  return (
        <>
          <ItemCount initial={0} stock={10} />
        </>
    )
}

export default ItemListContainer