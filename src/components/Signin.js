import React, { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import { Text } from "./common/Text";
import { LinkToJoinOrLogin } from "./common/UserSignUpOrLoginLink";
import { Alert, FormControl, InputLabel, Snackbar } from "@mui/material";
import { database } from "../database";

const emailRe = /^([a-z0-9_\-.]+)@([a-z]+)\.([a-z]{2,3})$/;

export const Signin = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState({
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formFieldError, setFormFieldError] = useState({
    password: "",
    email: "",
  });
  const [authError, setAuthError] = useState(false);
  const toggleVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const [formFieldTouched, setFormFieldTouched] = useState({
    password: "",
    email: "",
  });
  const validate = useCallback(
    (fields, submitted) => {
      const { password, email } = fields;
      if (submitted) {
        if (!password) {
          setFormFieldError((prev) => ({
            ...prev,
            password: "please enter your password",
          }));
        } else {
          setFormFieldError((prev) => ({
            ...prev,
            password: "",
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
      } else {
        if (formFieldTouched.password) {
          if (!password) {
            setFormFieldError((prev) => ({
              ...prev,
              password: "please enter your first name",
            }));
          } else {
            setFormFieldError((prev) => ({
              ...prev,
              password: "",
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
      }
      if (password && emailRe.test(email)) {
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
    try {
      const { email, password } = values;
      setLoading(true);
      let found;
      const isFormValid = validate(values, true);
      if (isFormValid) {
        found = database.find(
          (item) => item.email === email && item.password === password
        );

        if (found) {
          localStorage.setItem(
            "token",
            "some-complex-string-that-identifies-user"
          );
          navigate("/dashboard", { replace: true });
        } else {
          setAuthError("wrong credentials entered");
        }
      }
    } catch (error) {
      setAuthError("An error occured");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <LinkToJoinOrLogin
        path="register"
        text1="Not yet a member"
        text2="Register"
      />
      <div className="flex justify-center flex-col items-center h-screen mt-8">
        <Text className="text-lg font-bold text-gray-900">
          Welcome back to Prospa
        </Text>
        <Text className="lg:self-start text-xs mb-4 ml-0 lg:ml-80 my-2">
          An account with powerful personalized tools all in one place
        </Text>
        <div className="w-10/12 lg:mx-0 lg:w-5/12">
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
              placeholder="Enter Email"
              label="Enter Email"
              className="w-full mb-4"
              type="email"
              variant="filled"
            />
          </div>
          <div className="mb-8">
            <FormControl className="w-full" variant="filled">
              <InputLabel
                error={formFieldError.password ? true : false}
                htmlFor="password"
              >
                Enter Password *
              </InputLabel>
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
                <FormHelperText>
                  <p className="text-red-600">{formFieldError.password}</p>
                </FormHelperText>
              ) : null}
            </FormControl>
          </div>

          <button
            onClick={handleSubmit(formField)}
            className="w-full bg-red-400 p-3 rounded-md flex justify-center"
          >
            {loading ? (
              <CircularProgress color="loader" size={20} />
            ) : (
              <Text color="text-white" className="font-bold">
                Next
              </Text>
            )}
          </button>
          <Snackbar
            onClose={() => setAuthError(null)}
            open={authError ? true : false}
            autoHideDuration={6000}
          >
            <Alert
              onClose={() => setAuthError(null)}
              severity="error"
              sx={{ width: "100%" }}
            >
              {authError}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  );
};
