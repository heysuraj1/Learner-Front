import React, { useState, useEffect } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import Link from "next/link";

function About() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    let url = "https://djangopostgres1.herokuapp.com/";
    axios
      .get(url)
      .then((acc) => {
        setPost(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        {post.map((hit) => {
          return (
            <div key={hit.Slug}>
                <Link href={`/blog/${hit.Slug}`}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative border border-info lemo">
                
                  <div className="col p-4 d-flex flex-column position-static">
                    <div className="mb-1 text-muted">{hit.Date}</div>

                    <h3 className="mb-0">{hit.Title}</h3>

                    <div
                      className="mt-3 text-start"
                      dangerouslySetInnerHTML={{
                        __html: hit.Content.slice(0, 200),
                      }}
                    />
                  </div>
                
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
