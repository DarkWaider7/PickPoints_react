import FilteredAddress from "./FilteredAddress";
import AllAddress from "./AllAddress";

const AddressBox = ({
  addressesAll,
  filterAdreess,
  isPressed,
  setIsPressed,
  inputChecked,
  setCordinates,
}) => {
  return (
    <div>
      {inputChecked ? (
        <FilteredAddress
          filterAdreess={filterAdreess}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          setCordinates={setCordinates}
        />
      ) : (
        <AllAddress
          addressesAll={addressesAll}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          setCordinates={setCordinates}
        />
      )}
    </div>
  );
};

export default AddressBox;
