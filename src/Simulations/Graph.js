import React from 'react';

const Graph = ({ nodes, edges }) => {
  const nodeElements = nodes.map((node) => (
    <div
      key={node.id}
      style={{
        backgroundColor: node.color,
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        boxShadow: '0px 3px 8px rgba(0,0,0,0.3)',
        margin: '10px',
      }}
    >
      {node.id}
    </div>
  ));

  const edgeElements = edges.map((edge) => {
    const nodeA = nodes.find((node) => node.id === edge.startNodeId);
    const nodeB = nodes.find((node) => node.id === edge.endNodeId);

    const x1 = nodeA.x + 15;
    const y1 = nodeA.y + 15;
    const x2 = nodeB.x + 15;
    const y2 = nodeB.y + 15;

    return (
      <line
        key={edge.id}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        strokeWidth="2"
        stroke="black"
      />
    );
  });

  return (
    <svg width="400" height="400">
      {edgeElements}
      {nodeElements}
    </svg>
  );
};

export default Graph;
