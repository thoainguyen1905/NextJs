import React from "react";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>Thoại đz</title>
        <meta property="og:title" content="thoại" />
        <meta
          property="og:image"
          content={
            "https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2022_03_18/iphone_13_1.jpg"
          }
        />
      </Head>
    </div>
  );
}

export default index;
