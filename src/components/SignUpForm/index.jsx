import { useState } from "react";
import styles from "./SignUpForm.module.css";
import classNames from "classnames";
import { FaEye } from "react-icons/fa";

const SIGN_UP_FOR_REG_EXP = {
  name: /^[A-Z]{1}[a-z]{1,32} [A-Z]{1}[a-z]{1,32}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCofirmation, setPassworCofirmation] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handlePasswordConfiramtionChange = ({ target: { value } }) => {
    setPassworCofirmation(value);
  };

  const handleAgreementChange = ({ target: { checked } }) => {
    setIsAgree(checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    console.log("User:", user);
    setName("");
    setEmail("");
    setPassword("");
    setPassworCofirmation("");
    setIsAgree(false);
  };

  const isSubmitBtnDisabled = () => {
    const isPasswordConfirmationValid =
      SIGN_UP_FOR_REG_EXP.password.test(passwordCofirmation) &&
      password === passwordCofirmation;

    return !(
      SIGN_UP_FOR_REG_EXP.name.test(name) &&
      SIGN_UP_FOR_REG_EXP.email.test(email) &&
      SIGN_UP_FOR_REG_EXP.password.test(password) &&
      isPasswordConfirmationValid &&
      isAgree
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create Your Account</h2>
      <form className={styles.signUpForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>FULL NAME</span>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="John Doe"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>EMAIL</span>
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="youremail@mail"
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>PASSWORD</span>
          <div className={styles.passwordInputWrapper}>
            <input
              className={styles.formInput}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              autoFocus
            />
            <FaEye
              className={styles.passwordEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>PASSWORD CONFIRMATION</span>
          <div className={styles.passwordInputWrapper}>
            <input
              className={styles.formInput}
              type={isPasswordConfirmationVisible ? "text" : "password"}
              name="confirmPassword"
              value={passwordCofirmation}
              onChange={handlePasswordConfiramtionChange}
              autoFocus
            />
            <FaEye
              className={styles.passwordEye}
              onClick={() =>
                setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible)
              }
            />
          </div>
        </label>
        <label className={styles.formLabel}>
          <input
            className={styles.checkBox}
            type="checkbox"
            name="agreement"
            checked={isAgree}
            onChange={handleAgreementChange}
            placeholder="John Doe"
            autoFocus
          />
          <span className={styles.checkBoxCaption}>
            I Agree All Statement In terms Of Service
          </span>
        </label>
        <button
          className={styles.submitBtn}
          disabled={isSubmitBtnDisabled()}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
