import { RecipLayout } from "@/components";
import RecipeComponent from "@/components/recipes/RecipeComponent";
import {
  globalStates,
  onRouteClickS,
  setLoading,
} from "@/services/features/globalstate/GlobalStateSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession, signIn } from "next-auth/react";

const RecipeCollectionCP = () => {
  const dispatch = useDispatch();
  const secureSession = async () => {
    const session = await getSession();
    if (!session) {
      return signIn();
    } else {
      return dispatch(setLoading);
    }
  };
  React.useEffect(() => {
    secureSession();
  }, []);

  const onRoute = useSelector(onRouteClickS);
  const { isLoading } = useSelector(globalStates);
  return (
    <>
      <RecipLayout onRouteClick={onRoute}>
        <RecipeComponent />
      </RecipLayout>
      {isLoading && <p>loading</p>}
    </>
  );
};

export default RecipeCollectionCP;
