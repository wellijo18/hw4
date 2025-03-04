import React from "react";
import { Layout } from "antd";
import Link from "next/link";

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#001529", color: "white", padding: "10px 0" }}>
            <nav style={{ width: "100%", textAlign: "center" }}>
                <p style={{ marginTop: "10px" }}>&copy; 2025 Spark! Bytes. All Rights Reserved.</p>
            </nav>
        </Footer>
    );
};

export default CustomFooter;