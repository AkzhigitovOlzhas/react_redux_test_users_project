import React, { useEffect } from "react";
import { Form, Input, Button, InputNumber, Alert, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignUp } from "../../redux/redusers/auth/authThunk";
import authAction from "../../redux/redusers/auth/authAction";
import { Link, useNavigate } from "react-router-dom";

export const SingUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isReg, isLoading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isReg) {
      Modal.success({
        content: "Вы успешно зарегестрировались",
        onOk() {
          navigate("/");
          dispatch(authAction.setReg(false));
        },
      });
    }
  }, [navigate, dispatch, isReg]);

  const onFinish = (values) => {
    dispatch(asyncSignUp(values));
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    range: "${label} must be between ${min} and ${max}",
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
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ type: "number", min: 0, max: 99 }, { required: true }]}
      >
        <InputNumber />
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
        Уже есть аккаунт?{" "}
        <Link className="link" to="/">
          Попробуйте войти.
        </Link>
      </div>
    </Form>
  );
};
