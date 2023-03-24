import React from "react";
import Sets from "./LeftNav4";

function Theory() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Theory</h1>
        <p>
          The pigeonhole principle is a fundamental concept in combinatorial
          mathematics that states that if n items are distributed among k
          containers and n > k, then at least one container must contain more
          than one item. This principle can be used to solve a wide range of
          problems in various fields, including computer science, statistics,
          and engineering. In the context of the experiment, the theory behind
          the pigeonhole principle is used to solve combinatorial problems
          involving the arrangement and distribution of objects. By applying the
          principle, students are able to reason logically and systematically to
          arrive at a correct solution. The experiment aims to provide students
          with a hands-on learning experience that reinforces the concepts of
          the pigeonhole principle and helps to develop their problem-solving
          skills. The experiment involves the distribution of objects among
          different containers, where the number of objects is greater than the
          number of containers. By applying the pigeonhole principle, students
          can determine the minimum number of objects that must be selected to
          guarantee that at least one container contains more than one object.
          This involves analyzing the problem and using logical reasoning to
          arrive at a solution. Overall, the experiment is designed to introduce
          students to the concept of the pigeonhole principle, provide them with
          practical examples of how it can be applied, and help them develop
          their problem-solving skills in combinatorial mathematics.
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
