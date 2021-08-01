import { FC } from "react";
import classes from "../../styles/CharacterDetails.module.scss";
import { Values } from "../../interface/index";

type CharectorDetailsProps = Values;

const CharectorDetails: FC<CharectorDetailsProps> = ({ values }) => {
  const age =
    Number(new Date(Date.now()).getFullYear()) -
    Number(new Date(values.dob).getFullYear());

  return (
    <div className={classes.container}>
      <div>
        <h1>Hey my name is </h1>
        <h2>
          {values.name} {values.surname}
        </h2>
        <p>
          I am {age} years old and I work as {values.occupation}
        </p>
      </div>
    </div>
  );
};

export default CharectorDetails;
