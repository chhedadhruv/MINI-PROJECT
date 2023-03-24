import React from "react";
import Sets from "./LeftNav4";

function Theory() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Theory</h1>
        <p>
          The concept of sets in mathematics deals with the properties and
          operations on collections of objects. This is particularly important
          for classification, organization, and is the base for many forms of
          data analysis.
        </p>
        <p>
          In mathematics, sets are essentially a collection of different items
          that form a group. A set can contain any number of elements, such as
          numbers, days of the week, car types, and so on.{" "}
        </p>
        <p>
          Each object in the set is referred to as an element of the set. When
          writing a set, curly brackets are used. This is an example of a set in
          its most basic form Set A =(1, 2, 3).
        </p>
      </div>
    </>
  );
}

export default Theory;
