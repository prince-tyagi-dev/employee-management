import { useNavigate } from "react-router-dom";
import { Enums } from "../../Utility/Enums";

const UnAuthorized = () => {
  const navigate = useNavigate();
  const goBack = (e) => {
    //e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="container-fluid">
      <h1>Un Authorized</h1>
      <p>{Enums.msg.unAuthorized}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default UnAuthorized;
