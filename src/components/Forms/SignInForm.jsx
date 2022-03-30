import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignIn } from "../../redux/redusers/auth/authThunk";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(asyncSignIn(values));
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <Form
      name="signIn"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email" }, { required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
          {
            pattern: /^.{4,16}$/,
            message: `pass > 4 && pass < 16`,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {error && (
        <Alert style={{ margin: "10px 0" }} message={error} type="error" />
      )}
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
      <div className="message">
        Нет аккаунта?{" "}
        <Link className="link" to="/reg">
          Вы можете зарегестрироваться здесь.
        </Link>
      </div>
    </Form>
  );
};
