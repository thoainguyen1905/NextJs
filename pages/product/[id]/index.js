import React from "react";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content={"hello"} />
        <meta
          property="og:url"
          content="https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2022_03_18/iphone_13_1.jpg"
        />
        <meta property="og:description" content="đây là des" />
        <meta
          property="og:image"
          content="https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2022_03_18/iphone_13_1.jpg"
        />
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
