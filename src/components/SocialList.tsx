import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://www.instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <instagram width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Facebook"
        href={`https://www.facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener"
      >
        <Facebook width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
