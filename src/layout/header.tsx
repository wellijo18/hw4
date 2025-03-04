import React from "react";
import { Layout } from "antd";
import Link from "next/link";

const { Header } = Layout;

const CustomHeader = () => {
    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <nav style={{ width: "100%" }}>
                <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "20px" }}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/news">News</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </Header>
    );
};

export default CustomHeader;
