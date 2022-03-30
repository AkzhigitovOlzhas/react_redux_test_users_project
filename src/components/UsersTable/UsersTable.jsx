import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { loadUsersAsync } from "../../redux/redusers/users/usersThunk";
import "./index.css";

export const UsersTable = () => {
  const { users, isLoadingUsers, usersError } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, [dispatch]);

  const usersMemo = useMemo(() => {
    if (!users.users || isLoadingUsers) {
      return [];
    }
    return users.users.map((user) => ({ ...user, key: user.id }));
  }, [isLoadingUsers, users]);

  if (isLoadingUsers) {
    return <div>Loading</div>;
  }

  if (usersError) {
    return <div>{usersError}</div>;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div className="table__wrapper">
      <Table columns={columns} dataSource={usersMemo} />
    </div>
  );
};
