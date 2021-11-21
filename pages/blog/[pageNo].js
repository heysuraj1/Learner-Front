import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../component/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch("https://djangopostgres1.herokuapp.com/api/");
  const data = await res.json();

  const paths = data.map((him) => {
    return {
      params: { pageNo: him.Slug.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const Slug = context.params.pageNo;
  const res = await fetch(`https://djangopostgres1.herokuapp.com/api/?Slug=${Slug}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

function MyData({ data }) {
  const router = useRouter();
  const pogo = router.query.pageNumber;
  return (
    <>
      <NavBar />
      <div className="container pb-5 ">
        <div className="row">
          <div className="col-sm-1 d-sm-none d-md-block">Ads</div>
          <div className="col-sm-10 bg-light p-4">
          <h3 className="pb-5">{data.Title}</h3>
          <div
            className="mt-3 text-start"
            dangerouslySetInnerHTML={{
              __html: data.Content,
            }}
          />
          </div>
          <div className="col-sm-1">Ads</div>

          
        </div>
      </div>
    </>
  );
}

export default MyData;
