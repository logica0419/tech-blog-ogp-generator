import { css } from "@emotion/react";
import React from "react";
import Helmet from "react-helmet";

const style = {
  app: css`
    text-align: center;
    min-height: 100vh;
  `,
};

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="ja" />
        <title>Tech Blog OGP Generator</title>
        <meta
          name="description"
          content="Zenn / Qiita OGP-like Image Generator"
        />
      </Helmet>
      <div css={style.app}>
        <h1>Hello</h1>
        <p>Welcome to your new Gatsby site.</p>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
