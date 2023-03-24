import React, { useState } from 'react';
import LeftNav4 from './LeftNav5'
import ForceGraph2D from 'react-force-graph-2d';

function MatrixToGraph({ matrix }) {
    const [graphData, setGraphData] = useState(() => {
        const nodes = matrix.map((row, rowIndex) => ({ id: `node-${rowIndex}` }));
        const links = matrix.flatMap((row, rowIndex) =>
          row.map((value, colIndex) => ({
            source: `node-${rowIndex}`,
            target: `node-${colIndex}`,
            value,
          }))
        );
        return { nodes, links };
      });
    
      return (
        <ForceGraph2D
          graphData={graphData}
          linkCanvasObject={(link, ctx, globalScale) => {
            const lineColor = link.value === 0 ? '#ccc' : '#000';
            const thickness = link.value === 0 ? 1 / globalScale : 3 / globalScale;
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = thickness;
            ctx.moveTo(link.source.x, link.source.y);
            ctx.lineTo(link.target.x, link.target.y);
            ctx.stroke();
          }}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
    
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              ...bckgDimensions
            );
    
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000';
            ctx.fillText(label, node.x, node.y);
          }}
        />
      );
  }

function Simulation5() {
    // const matrix = [
    //     [0, 1, 1, 0],
    //     [1, 0, 0, 1],
    //     [1, 0, 0, 1],
    //     [0, 1, 1, 0]
    //   ];
    const matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  return (
    <>
    <LeftNav4 />
    <div style={{position: "absolute", top: 130, left: 150, height: '500px', width:'500px'}}>
      <h1>Simulation</h1>
      <MatrixToGraph matrix={matrix} />
    </div>
    </>
  )
}

export default Simulation5