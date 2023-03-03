import { useRepairContext } from "../../../(Context)/repair";
import ItemButton from "./ItemButton";

const ItemButtons = () => {
  return (
    // Button container
    <div className="grid grid-cols-3 gap-9">
      {["jackets", "trousers", "dresses", "tops", "accessories", "other"].map(
        (item, idx) => (
          <ItemButton key={idx} idx={idx} />
        )
      )}
    </div>
  );
};

export default ItemButtons;
