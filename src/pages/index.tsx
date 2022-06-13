import { css } from "@emotion/react";
import { Head } from "minista";
import { FC, Fragment } from "react";

import "../assets/global.css";
import Canvas from "../components/canvas";
import Header from "../components/header";

const style = {
  app: css`
    margin: 100px;
    text-align: center;
  `,
};

const IndexPage: FC = () => {
  return (
    <Fragment>
      <Head>
        <html lang="ja" />
        <title>Tech Blog OGP Generator</title>
        <meta
          name="description"
          content="Zenn / Qiita OGP-like Image Generator"
        />
      </Head>
      <Header />
      <div css={style.app}>
        <h1>Hello</h1>
        <p>Welcome to your new Minista site.</p>
      </div>
      <Canvas />
    </Fragment>
  );
};

export default IndexPage;
