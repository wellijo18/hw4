import React from "react";
import { Table, Typography } from "antd";
import { Article } from "./types/types";
import ArticleTable from "./components/ArticleTable";

const { Title } = Typography;

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  const uniqueNewsSources = [...new Set(articles.map((article) => article.news_site))];

  const dateRange = {
    start: new Date(
        Math.min(
            ...articles.map((article) => new Date(article.published_at).getTime())
        )
    ).toLocaleDateString(),
    end: new Date(
        Math.max(
            ...articles.map((article) => new Date(article.published_at).getTime())
        )
    ).toLocaleDateString(),
  };

  const featuredArticlesCount = articles.filter(article => article.featured).length;

  const articlesTable = (
      <Table
          dataSource={articles}
          rowKey="id"
          pagination={false}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
              key: "title",
              render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
            },
            {
              title: "News Source",
              dataIndex: "news_site",
              key: "news_site",
              render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
            },
            {
              title: "Published Date",
              dataIndex: "published_at",
              key: "published_at",
              render: (text: string) => new Date(text).toLocaleDateString(),
            },
          ]}
      />
  );

  const uniqueSourcesTable = (
      <Table
          dataSource={uniqueNewsSources.map((source) => ({ key: source, name: source }))}
          rowKey="key"
          pagination={false}
          columns={[
            {
              title: "Unique News Sources",
              dataIndex: "name",
              key: "name",
              render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
            },
          ]}
      />
  );

  const dateRangeTable = (
      <Table
          dataSource={[
            { key: 'earliest', label: 'Earliest: ', date: dateRange.start },
            { key: 'latest', label: 'Latest: ', date: dateRange.end }
          ]}
          rowKey="key"
          pagination={false}
          columns={[
            {
              title: "Date Range of Articles",
              dataIndex: "label",
              key: "label",
              render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
            },
            {
              title: "",
              dataIndex: "date",
              key: "date",
              render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
            },
          ]}
      />
  );

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                {articlesTable}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                gap: '16px',
                marginBottom: 16
            }}>
                <div style={{ flex: 1 }}>
                    <Title level={5}>Unique News Sources</Title>
                    {uniqueSourcesTable}
                </div>
                <div style={{ flex: 1 }}>
                    <Title level={5}>Date Range</Title>
                    {dateRangeTable}
                </div>
                <div style={{ flex: 1 }}>
                    <Title level={5}>Featured Articles</Title>
                    {featuredArticlesTable}
                </div>
            </div>
        </div>
    );

export default ArticleStatistics;