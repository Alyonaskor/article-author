import 'semantic-ui-css/semantic.min.css';

import React from "react";
import { Card, Image } from "semantic-ui-react";

const authorMoc = {
  header: "Author Name",
  description: "Author short description",
  avatarUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
  authorPage: "#card-example-link-card",
};

const ArticleAuthor = () => (
  <Card>
    <Card.Content>
      <Image floated="left" size="mini" src={authorMoc.avatarUrl} />
      <Card.Header href={authorMoc.authorPage}>{authorMoc.header}</Card.Header>
      <Card.Description >{authorMoc.description}</Card.Description>
    </Card.Content>
  </Card>
);
export default ArticleAuthor;