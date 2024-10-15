import React from "react";
import { BookDetails } from "@/ui/view";
import { getBookWithId } from "@/utils/apiFunc";

const BooksDetailsPage = async ({ params }: { params: { id: string } }) => {
  console.log(params, "params");
  const data = await getBookWithId(params.id);

  return (
    <BookDetails
      srcImage={data?.poster}
      subTitle={data?.by}
      title={data?.title}
    />
  );
};

export default BooksDetailsPage;
