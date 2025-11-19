import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    confirmpassword: null,
  });

  function isValidEmail(email) {
    // A pragmatic and widely used regex pattern for email validation.
    // It checks for:
    // 1. Local part: letters, numbers, and allowed symbols (._%+-).
    // 2. An '@' symbol.
    // 3. Domain part: letters, numbers, and hyphens (.-).
    // 4. A TLD (Top-Level Domain) of at least 2 characters.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email string against the regex pattern
    return emailRegex.test(email);
  }

  useEffect(() => {
    if (
      form.name &&
      form.password &&
      form.confirmpassword &&
      form.email &&
      form.password === form.confirmpassword &&
      form.password.length >= 6 &&
      isValidEmail(form.email)
    ) {
      setIsEnabled(true);
    } else setIsEnabled(false);
    const newErrors = {};
    if (form.email && !isValidEmail(form.email))
      newErrors.email = "Email Format is Wrong";
    if (form.password && form.password.length < 6)
      newErrors.password = "Password should be atleast 6 characters";

    if (form.confirmpassword && form.password !== form.confirmpassword)
      newErrors.confirmpassword = "Both passwords should match";
    setErrors(newErrors);
  }, [form.confirmpassword, form.email, form.name, form.password]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="field">
        <p>Full Name:</p>
        <div className="inputBox">
          <input
            placeholder="Enter Full Name"
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {errors.name && <span className="errorField">{errors.name}</span>}
        </div>
      </div>
      <div className="field">
        <p>Email:</p>
        <div className="inputBox">
          <input
            placeholder="Enter Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {errors.email && <span className="errorField">{errors.email}</span>}
        </div>
      </div>
      <div className="field">
        <p>Password:</p>
        <div className="inputBox">
          <div className="passwordField">
            <input
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <i onClick={toggleShowPassword}>
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </i>
          </div>
          {errors.password && (
            <span className="errorField">{errors.password}</span>
          )}
        </div>
      </div>
      <div className="field">
        <p>Confirm Password:</p>
        <div className="inputBox">
          <div className="passwordField">
            <input
              placeholder="Confirm Password:"
              type={showPassword ? "text" : "password"}
              value={form.confirmpassword}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  confirmpassword: e.target.value,
                }))
              }
            />
            <i onClick={toggleShowPassword}>
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </i>
          </div>
          {errors.confirmpassword && (
            <span className="errorField">{errors.confirmpassword}</span>
          )}
        </div>
      </div>
      <button
        disabled={!isEnabled}
        onClick={() => {
          alert(
            `User Submition Successfull \n Detail: ${JSON.stringify(
              form,
              null,
              2
            )}`
          );
          setForm({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SignupForm;
