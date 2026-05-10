import "./globals.css";

export const metadata = {
  title: "沐爪宠物洗护",
  description: "沐爪宠物洗护店单页官网，提供宠物洗澡、美容修剪、护理 SPA 与预约服务。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
