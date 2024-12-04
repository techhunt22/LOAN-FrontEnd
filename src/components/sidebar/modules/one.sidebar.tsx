"use client";
import { Card, Typography, List } from "antd";
import {
  BarChartOutlined,
  InboxOutlined,
  FileOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";

export const OneSidebar = () => {
  return (
    <Card className="rounded-none shadow-none h-[calc(100vh)] w-full p-5 bg-blue-gray-50/10">
      <div className="px-4 py-1">
        <Typography.Title level={5} type="secondary">
          Menus
        </Typography.Title>
      </div>
      <List>
        <List.Item key="dashboard" className="ant-list-item-selected">
          <BarChartOutlined className="h-5 w-5" />
          Dashboard
        </List.Item>
        <List.Item key="inbox">
          <InboxOutlined className="h-5 w-5" />
          Inbox
          <Badge count={14} overflowCount={99} className="ml-1" />
        </List.Item>
        <List.Item key="documents">
          <FileOutlined className="h-5 w-5" />
          Documents
        </List.Item>
        <List.Item key="profile">
          <UserOutlined className="h-5 w-5" />
          Profile
        </List.Item>
        <List.Item key="settings">
          <SettingOutlined className="h-5 w-5" />
          Settings
        </List.Item>
        <List.Item key="logout">
          <PoweroffOutlined className="h-5 w-5" />
          Log Out
        </List.Item>
      </List>
    </Card>
  );
};
