import React, { useEffect, useContext } from "react";
import { getLayout } from "../../api/layouts.api";
import { LayoutContext } from "../../providers/layout/layout.provider";
import { useParams } from "react-router-dom";

export const Layout = () => {
  const { setLayout, setLayoutOriginal } = useContext(LayoutContext);
  const params = useParams();

  useEffect(() => {
    const apiCallGetLayout = async () => {
      try {
        const layoutId = params.id * 1;

        if (!layoutId) return;
        const response = await getLayout(layoutId);
        setLayout(response.data);
        setLayoutOriginal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiCallGetLayout();
  }, [params, setLayout, setLayoutOriginal]);

  return (
    <div className="page">
      <div>Layout page</div>
    </div>
  );
};
