import React from "react";
import Cards from "./Cards";
import Table from "./Table";

const Feed = ({ cardData, bucketsData, approvalData, memberBucketData }) => {
  return (
    <section className="w-3/4 flex flex-col gap-4 xs:mx-auto md:mx-0">
      <h1 className="text-2xl font-bold xs:text-center md:text-left mt-4">
        Hi,Jennie Moss
      </h1>
      <div className="flex xs:flex-col md:flex-row  gap-4 self-center">
        {cardData.map((item, key) => (
          <Cards data={item} />
        ))}
      </div>
      <article className="border-2 border-gray-500 rounded-md mr-48 md:p-4 w-fit">
        <p className="text-xl font-semibold">Buckets you own</p>
        <Table
          columns={Object.getOwnPropertyNames(bucketsData[0])}
          data={bucketsData}
        />
      </article>

      <article className="border-2 border-gray-500 rounded-md  mr-48 md:p-4 w-fit">
        <p className="text-xl font-semibold">Approvals assigned to you</p>
        <Table
          columns={Object.getOwnPropertyNames(approvalData[0])}
          data={approvalData}
          buttons={true}
        />
      </article>

      <article className="border-2 border-gray-500 rounded-md  mr-48 md:p-4 w-fit">
        <p className="text-xl font-semibold">Buckets you are member of</p>
        <Table
          columns={Object.getOwnPropertyNames(memberBucketData[0])}
          data={memberBucketData}
        />
      </article>
    </section>
  );
};

export default Feed;
