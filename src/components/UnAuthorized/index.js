import { useNavigate } from "react-router-dom";
import { Enums } from "../../Utility";

const UnAuthorized = () => {
  const navigate = useNavigate();
  const goBack = (e) => {
    debugger;
    //e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <h1>Un Authorized</h1>
      <p>{Enums.msg.unAuthorized}</p>
      <button onClick={goBack}>Go Back</button>
    </>
  );
};

export default UnAuthorized;
