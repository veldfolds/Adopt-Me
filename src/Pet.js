// eslint-disable-next-line no-unused-vars
import style from "./styles.module.css";

const Pet = (props) => {
  return (
    <div>
      <h1 className="h1">{props.name}</h1>
      <h2 className="h1">{props.animal}</h2>
      <h2 className={style.h1}>{props.breed}</h2>
    </div>
  );
};

export default Pet;
