import {
  doc,
  getDoc
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../../firebase";

export default function Readblog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const blogid = searchParams.get("id");
  const [blogdata, setblogdata] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "blogs", blogid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setblogdata(docSnap.data());
    }

    getData();
  }, [blogid]);
  return (
    <>
      <div className="container px-28 py-20 fund ">
        <div className="d-flex mx-3 bg-dark flex-column mt-5">
          <div className=" text-white text-center text-lg my-2">
            {blogdata?.heading.toUpperCase()}
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div className="text-white mx-3">Author : {blogdata?.user}</div>
          </div>
        </div>

        <div className=" mx-3 my-3 bg-white border border-info shadow-lg">
          <div
            dangerouslySetInnerHTML={{ __html: blogdata?.data }}
            className="text-dark overflow-auto"
          ></div>
        </div>
      </div>
    </>
  );
}
