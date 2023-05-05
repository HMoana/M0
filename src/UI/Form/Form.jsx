// IMPORTS
import React from "react";
import { Fragment } from "react";

// UI
import Input from "../Input/Input";
import Button from "../Button/Button";

// PAGES & COMPONENTS
import classes from "./Form.module.scss";

// ~~~ DIDN'T USE ~~~

const Form = () => {
  return (
    <Fragment>
      <div className={classes.form__container}>
        <form action="" className={classes.form}>
          <h1 className={classes.form__title}>Login</h1>
          <div className={classes.form__email}>
            <Input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className={classes.form__password}>
            <Input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className={classes.form__forgot}>
            <a href="#forgot">Forgot password?</a>
            <Button type="submit" name="submit">
              Login
            </Button>
          </div>
          <div className={classes.form__register}>
            <p>
              Don't have an account? <a href="#register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
