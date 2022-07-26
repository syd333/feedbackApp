import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
  return (
    <>
      <Card reverse>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
