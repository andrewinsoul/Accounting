import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { FormControl, InputLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import { Text } from "./common/Text";
import { countryCodes } from "../utils/countryCode";
import { LinkToJoinOrLogin } from "./common/UserSignUpOrLoginLink";

const emailRe = /^([a-z0-9_\-.]+)@([a-z]+)\.([a-z]{2,3})$/;
const phoneRe = /^[0-9]+$/;
export const Signup = () => {
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+234",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [formFieldError, setFormFieldError] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [formFieldTouched, setFormFieldTouched] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  const validate = useCallback(
    (fields, submitted) => {
      const { firstName, lastName, phoneNumber, email, password } = fields;
      if (submitted) {
        if (!firstName) {
          setFormFieldError((prev) => ({
            ...prev,
            firstName: "please enter your first name",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            firstName: "",
          }));
        }
        if (!lastName) {
          setFormFieldError((prev) => ({
            ...prev,
            lastName: "please enter your last name",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            lastName: "",
          }));
        }
        if (!phoneRe.test(phoneNumber)) {
          setFormFieldError((prev) => ({
            ...prev,
            phoneNumber: "please enter a valid phone number",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            phoneNumber: "",
          }));
        }
        if (!emailRe.test(email)) {
          setFormFieldError((prev) => ({
            ...prev,
            email: "please enter a valid email address",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            email: "",
          }));
        }
        if (password.length < 8) {
          setFormFieldError((prev) => ({
            ...prev,
            password: "please a password that is at least 8 characters long",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            password: "",
          }));
        }
      } else {
        if (formFieldTouched.firstName) {
          if (!firstName) {
            setFormFieldError((prev) => ({
              ...prev,
              firstName: "please enter your first name",
            }));
          } else {
            setFormFieldError((prev) => ({
              ...prev,
              firstName: "",
            }));
          }
        }
        if (formFieldTouched.lastName) {
          if (!lastName) {
            setFormFieldError((prev) => ({
              ...prev,
              lastName: "please enter your last name",
            }));
          } else {
            setFormFieldError((prev) => ({
              ...prev,
              lastName: "",
            }));
          }
        }
        if (formFieldTouched.phoneNumber) {
          if (!phoneRe.test(phoneNumber)) {
            setFormFieldError((prev) => ({
              ...prev,
              phoneNumber: "please enter a valid phone number",
            }));
          } else {
            setFormFieldError((prev) => ({
              ...prev,
              phoneNumber: "",
            }));
          }
        }
        if (formFieldTouched.email) {
          if (!emailRe.test(email)) {
            setFormFieldError((prev) => ({
              ...prev,
              email: "please enter a valid email address",
            }));
          } else {
            setFormFieldError((prev) => ({
              ...prev,
              email: "",
            }));
          }
        }
        if (password.length < 8) {
          setFormFieldError((prev) => ({
            ...prev,
            password: "please a password that is at least 8 characters long",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            password: "",
          }));
        }
      }
      if (
        firstName &&
        lastName &&
        phoneRe.test(phoneNumber) &&
        emailRe.test(email)
      ) {
        return true;
      } else {
        return false;
      }
    },
    [formFieldTouched]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate({ ...formField, [name]: value });
    setFormField((prevFormField) => ({
      ...prevFormField,
      [name]: value,
    }));
  };

  const handleFocus = useCallback(
    (event) => {
      const { name } = event.target;
      if (!formFieldTouched[name]) {
        setFormFieldTouched((prevFormField) => ({
          ...prevFormField,
          [name]: true,
        }));
      }
      validate(formField);
    },
    [formFieldTouched, formField, validate]
  );

  const handleSubmit = (values) => () => {
    const isFormValid = validate(values, true);
    if (isFormValid) {
      values = {
        ...values,
        phoneNumber: `${values.countryCode}${values.phoneNumber}`,
      };
      alert("save user info");
    }
  };
  return (
    <>
      <LinkToJoinOrLogin
        path="login"
        text1="Already a member"
        text2="Sign in"
      />
      <div className="flex justify-center flex-col items-center h-screen mt-8">
        <Text className="text-lg font-bold text-gray-900">
          Create your account
        </Text>
        <Text className="lg:self-start text-xs mb-4 ml-0 lg:ml-80 my-2">
          Short description of your account
        </Text>
        <div className="w-10/12 lg:mx-0 lg:w-5/12">
          <div className="mb-8">
            <TextField
              onFocus={handleFocus}
              required
              onChange={handleChange}
              name="firstName"
              value={formField.firstName}
              id="standard-required"
              placeholder="First Name"
              label="First Name"
              error={formFieldError.firstName ? true : false}
              helperText={formFieldError.firstName}
              className="w-full mb-4 border-emerald-700 border-4"
              type="text"
              variant="filled"
            />
          </div>
          <div className="mb-8">
            <TextField
              required
              name="lastName"
              onChange={handleChange}
              value={formField.lastName}
              onFocus={handleFocus}
              id="standard-required"
              placeholder="Last Name"
              label="Last Name"
              error={formFieldError.lastName ? true : false}
              helperText={formFieldError.lastName}
              className="w-full mb-4"
              type="text"
              variant="filled"
            />
          </div>
          <div className="mb-8 flex flex-row">
            <div className="mr-3 text-xs">
              <TextField
                id="outlined-select-country"
                select
                onChange={handleChange}
                name="countryCode"
                label="Country"
                value={formField.countryCode}
                className="text-xs"
                variant="filled"
              >
                {countryCodes.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {`${option.code}(${option.name})`}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              required
              name="phoneNumber"
              onFocus={handleFocus}
              onChange={handleChange}
              id="standard-required"
              placeholder="Phone Number"
              label="Phone Number"
              value={formField.phoneNumber}
              error={formFieldError.phoneNumber ? true : false}
              helperText={formFieldError.phoneNumber}
              className="w-full"
              type="text"
              variant="filled"
            />
          </div>
          <div className="mb-8">
            <TextField
              required
              id="standard-required"
              name="email"
              onFocus={handleFocus}
              error={formFieldError.email ? true : false}
              helperText={formFieldError.email}
              onChange={handleChange}
              value={formField.email}
              placeholder="Email"
              label="Email"
              className="w-full mb-4"
              type="email"
              variant="filled"
            />
          </div>
          <div className="mb-8">
            <FormControl className="w-full" variant="filled">
              <InputLabel htmlFor="password">Password *</InputLabel>
              <FilledInput
                id="password"
                onFocus={handleFocus}
                required
                onChange={handleChange}
                name="password"
                value={formField.password}
                placeholder="Enter Password"
                label="Enter Password"
                error={formFieldError.password ? true : false}
                className="w-full"
                type={showPassword ? "text" : "password"}
                variant="filled"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formFieldError.password ? (
                <small className="text-red-600 text-xxsm">
                  {formFieldError.password}
                </small>
              ) : null}
            </FormControl>
          </div>
          <button
            onClick={handleSubmit(formField)}
            className="w-full bg-red-400 p-3 rounded-md flex justify-center"
          >
            <Text color="text-white" className="font-bold">
              Next
            </Text>
          </button>
        </div>
      </div>
    </>
  );
};
