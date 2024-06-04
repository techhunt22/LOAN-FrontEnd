"use client"
import React from 'react';
import { Drawer, Button, Typography, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { OneSidebar } from '@/components/sidebar/modules/one.sidebar';

const { Text } = Typography;

export const DashBoardHeader = () => {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className={'flex flex-row items-center md:gap-0 gap-4 justify-start bg-white w-full h-[60px]'}>
            <div>
                <div className={'md:hidden block'} onClick={openDrawer}>
                    <Button type="text" onClick={openDrawer}>
                        <MenuOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                    </Button>
                </div>
                <Drawer
                    visible={open}
                    onClose={closeDrawer}
                    placement="left"
                >
                    <OneSidebar />
                </Drawer>
            </div>
            <div className={'md:text-[30px] text-[18px] font-semibold'}>
                <Space>
                    <Text>My Dashboard</Text>
                    <Text type="danger">!</Text>
                </Space>
            </div>
        </div>
    );
};
