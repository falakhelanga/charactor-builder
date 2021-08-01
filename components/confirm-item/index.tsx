import { FC } from "react";
import classes from "../../styles/ConfirmItem.module.scss";

interface ConfirmItemProps {
  name: string;
  handleEdit: any;
  step: number;
  field: string;
}

const ConfirmItem: FC<ConfirmItemProps> = ({
  name,
  handleEdit,
  step,
  field,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <span>{field}:</span>
        {field === "color" ? (
          <span className={classes.colorSpan}>
            <div
              className={classes.colorDiv}
              style={{ backgroundColor: name }}
            ></div>
          </span>
        ) : (
          <span>{name}</span>
        )}

        <span
          className={classes.icon}
          onClick={() => {
            handleEdit(step);
          }}
        >
          {" "}
          <svg
            id="Group_1"
            data-name="Group 1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M4,20H8L18.5,9.5a2.828,2.828,0,0,0-4-4L4,16v4"
              fill="none"
              stroke="#3d3d3d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              x2="4"
              y2="4"
              transform="translate(13.5 6.5)"
              fill="none"
              stroke="#3d3d3d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default ConfirmItem;
