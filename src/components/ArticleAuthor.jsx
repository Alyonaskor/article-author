import React from "react";

const ArticleAuthor = () => {
  return (
    <div style={{ width: "960px", height: "auto" }}>
      <div className="item">
        <div className="ui tiny image left floated">
          <img
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <a className="header" href="#test">
            Stevie Feliciano
          </a>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eligendi pariatur dicta voluptatem dolore? Quasi
              debitis dignissimos mollitia magni illo distinctio! Voluptatum
              deserunt at laudantium, suscipit commodi impedit doloribus
              perspiciatis. Reprehenderit, maxime minus consequuntur molestias
              dolore explicabo perspiciatis aperiam possimus eligendi cupiditate
              doloribus consequatur? Asperiores doloribus rerum ipsum fugiat.
              Saepe?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthor;
