import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import "semantic-ui-css/semantic.min.css";

export default {
    title: "Article Author",
    component: ArticleAuthor,
};

const Template = (args) => <ArticleAuthor {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: "Article Author Name",
    avatar: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
}

