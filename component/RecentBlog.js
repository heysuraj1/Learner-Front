import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

function RecentBlog() {
  const [reblog, setReblog] = useState([]);
  useEffect(() => {
    let a = "https://djangopostgres1.herokuapp.com";
    axios
      .get(a)
      .then((acc) => {
        setReblog(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container ">
      <h1 className="henta">Our Recent Blogs</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 mb-5 d-flex justify-content-center">
        {reblog.slice(0, 4).map((rec) => {
          return (
            <div key={rec.id}>
              <Link href={`/blog/${rec.Slug}`}>
                <div className="col">
                  <div className="card">
                    <Image src={"/team.jpg"} width={100} height={150} alt="" />

                    <div className="card-body">
                      <h5>{rec.Title}</h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <div className="container d-flex justify-content-center">
        <Link href={`/blogs`}>
          <button className="btn btn-primary">
            Read More <span>&#8680;</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
