// FlowGraph.tsx
import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from '../FlowGraph/nodes';
import { initialEdges, edgeTypes } from '../FlowGraph/edges';
import { AppNode } from '../FlowGraph/types';

export const FlowGraph: React.FC<{ heroName: string; homeworld: string }> = ({
  heroName,
  homeworld,
}) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const dynamicNodes: AppNode[] = [
    {
      id: 'hero',
      type: 'position-logger',
      position: { x: 0, y: 0 },
      data: { label: heroName },
    },
    {
      id: 'homeworld',
      position: { x: 200, y: 0 },
      data: { label: `Homeworld: ${homeworld}` },
    },
  ];

  return (
    <ReactFlow
      nodes={[...nodes, ...dynamicNodes]}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
