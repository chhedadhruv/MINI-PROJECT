import React from 'react';
import Graph from './Graph';

const nodes = [
  { id: 'A', x: 50, y: 50, color: 'red' },
  { id: 'B', x: 150, y: 150, color: 'green' },
  { id: 'C', x: 250, y: 50, color: 'blue' },
];

const edges = [
  { id: '1', startNodeId: 'A', endNodeId: 'B' },
  { id: '2', startNodeId: 'B', endNodeId: 'C' },
  { id: '3', startNodeId: 'C', endNodeId: 'A' },
];

const GraphExample = () => {
  return <Graph nodes={nodes} edges={edges} />;
};

export default GraphExample;
