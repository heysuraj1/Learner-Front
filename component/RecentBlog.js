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
                <div className="col lemo">
                  <div className="card p-2 m-2 mx-auto" style={{width: "18rem"}}>
                    <Image src={rec.Image} width={200} height={180} alt="" />

                    <div className="card-body">
                      <h5>{rec.Title.slice(0, 75)}...</h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <div className="container d-flex justify-content-center mt-4">
          <Link href={`/blogs`}>
            <button className="btn btn-primary mt3">
              Read More <span>&#8680;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
