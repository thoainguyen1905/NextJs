import React from "react";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content={"hello"} />
        {/* <meta
          itemprop="image"
          content="https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png"
        /> */}
      </Head>

      <p>Hello world!</p>
    </div>
  );
}

export default index;
