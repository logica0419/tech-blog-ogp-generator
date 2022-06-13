import { Head } from "minista";
import { FC, Fragment } from "react";

import "../assets/global.scss";
import "./index.scss";
// @ts-ignore
import Canvas from "../components/canvas?ph";
import Header from "../components/header";

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
      <div className="index-app">
        <h1>Hello</h1>
        <p>Welcome to your new Minista site.</p>
      </div>
      <Canvas />
    </Fragment>
  );
};

export default IndexPage;
