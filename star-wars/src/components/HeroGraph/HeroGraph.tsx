import React from 'react';
import { ReactFlow, useNodesState, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './HeroGraph.scss';

import { HeroNode } from '../HeroGraph/nodes/HeroNode';
import { FilmNode } from '../HeroGraph/nodes/FilmNode';
import { StarshipNode } from '../HeroGraph/nodes/StarshipNode';
import { HeroGraphProps } from '../../types/types';

// I declare the HeroGraph component
export const HeroGraph: React.FC<HeroGraphProps> = ({
  heroName,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  homeworld,
  films,
  starships,
  heroImage,
}) => {
  // I initialize the nodes for the graph
  const initialNodes: Node[] = [
    {
      id: 'hero',
      type: 'input',
      data: {
        label: (
          <HeroNode
            heroName={heroName}
            birth_year={birth_year}
            eye_color={eye_color}
            gender={gender}
            hair_color={hair_color}
            height={height}
            mass={mass}
            skin_color={skin_color}
            homeworld={homeworld}
            heroImage={heroImage}
          />
        ),
      },
      position: { x: -500, y: 0 },
    },
  ];

  //Add nodes for films
  films.forEach((film, index) => {
    initialNodes.push({
      id: `film-${index}`,
      data: {
        label: <FilmNode filmName={film} />,
      },
      position: { x: -200, y: 100 + index * 150 },
    });
  });

  // Add nodes for starships
  starships.forEach((starship, index) => {
    initialNodes.push({
      id: `starship-${index}`,
      data: {
        label: <StarshipNode name={starship} />,
      },
      position: { x: 200, y: 100 + index * 200 },
    });
  });

  // Initialize the edges of the graph
  const initialEdges: Edge[] = [];

  // Add edges between the hero and the films
  films.forEach((_, index) => {
    initialEdges.push({
      id: `e1-${index}`,
      source: 'hero',
      target: `film-${index}`,
      animated: false,
      style: { stroke: '#feea1e', strokeWidth: 2 },
    });
  });

  // Add edges between movies and starships
  starships.forEach((_, starshipIndex) => {
    films.forEach((_, filmIndex) => {
      initialEdges.push({
        id: `e-film-${filmIndex}-starship-${starshipIndex}`,
        source: `film-${filmIndex}`,
        target: `starship-${starshipIndex}`,
        animated: false,
        style: { stroke: '#feea1e', strokeWidth: 2 },
      });
    });
  });

  // Hook for node state
  const [nodes, , onNodesChange] = useNodesState(initialNodes);

  return (
    <ReactFlow
      nodes={nodes}
      edges={initialEdges}
      onNodesChange={onNodesChange}
      className="intersection-flow"
      minZoom={0.2}
      maxZoom={4}
      fitView
      selectNodesOnDrag={false}
    />
  );
};
