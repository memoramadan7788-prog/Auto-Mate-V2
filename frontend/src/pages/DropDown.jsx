
import { Dropdown, DropdownItem } from "flowbite-react";

 function DropDown() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>

    </Dropdown>
  );
}
export default DropDown