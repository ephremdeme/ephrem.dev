import Head from "next/head";
import React from "react";

function Header({ title = "Ephrem Demelash" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta key={"og:title"} property="og:title" content={title} />
      <meta
        name="description"
        key={"description"}
        content="Ephrem is a passionate software developer who has been building a robust Microservice systems, Web apps, and Cloud Native applications for more than 3 years."
      />
      <meta
        name="og:description"
        key={"og:description"}
        content="Ephrem is a passionate software developer who has been building a robust Microservice systems, Web apps, and Cloud Native applications for more than 3 years."
      />
      <meta key={"article:author"} property="article:author" content={title} />
      <link rel="icon" href="/favicon.ico" />
      <div></div>
    </Head>
  );
}

export default Header;
