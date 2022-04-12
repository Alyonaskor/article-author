import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Item } from "semantic-ui-react";

const authorMoc = {
  header: "Author Name",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi pariatur dicta voluptatem dolore? Quasi debitis dignissimos mollitia magni illo distinctio! Voluptatum deserunt at laudantium, suscipit commodi impedit doloribus perspiciatis. Reprehenderit, maxime minus consequuntur molestias dolore explicabo perspiciatis aperiam possimus eligendi cupiditate doloribus consequatur? Asperiores doloribus rerum ipsum fugiat. Saepe?",
  avatarUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
  authorPage: "#card-example-link-card",
};

const ArticleAuthor = () => (
    
  <Item >
    <Item.Image floated="left" size="mini" src={authorMoc.avatarUrl} />
      <Item.Header href={authorMoc.authorPage} as="a">
        {authorMoc.header}
      </Item.Header>
      <Item.Description>{authorMoc.description}</Item.Description>   
  </Item>
  
);
export default ArticleAuthor;
