import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
 
const COUNTRIES = ["Ecuador (+593)","France (+33)", "Germany (+49)", "Spain (+34)", "USA (+1)"];
const CODES = ["+593","+33", "+49", "+34", "+1"];
 
export function InputPhoneCountryCode() {
  const [country, setCountry] = React.useState(0);
 
  return (
    <div className="w-full max-w-[24rem]">
     
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
                          ripple={false}
                          variant="text"
                          color="blue-gray"
                          className="h-10 w-14 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-transparent px-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {CODES[country]}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {COUNTRIES.map((country, index) => {
              return (
                <MenuItem
                      key={country}
                      value={country}
                      onClick={() => setCountry(index)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {country}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={12}
                  placeholder="Teléfono"
                  className="appearance-none rounded-l-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                      className: "min-w-0",
                  }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}        />
      </div>
    </div>
  );
}