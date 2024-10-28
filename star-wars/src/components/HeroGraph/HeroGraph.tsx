import React from 'react';
import { ReactFlow, useNodesState, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './HeroGraph.scss';

import { HeroNode } from '../HeroGraph/nodes/HeroNode';
import { FilmNode } from '../HeroGraph/nodes/FilmNode';
import { StarshipNode } from '../HeroGraph/nodes/StarshipNode';
import { HeroGraphProps } from '../../types/types';

export const HeroGraph: React.FC<HeroGraphProps> = ({
  heroName,
  birthYear,
  eyeColor,
  gender,
  hairColor,
  height,
  mass,
  skinColor,
  homeworld,
  films,
  starships,
  heroImage,
}) => {
  const initialNodes: Node[] = [
    {
      id: 'hero',
      type: 'input',
      data: {
        label: (
          <HeroNode
            heroName={heroName}
            birthYear={birthYear}
            eyeColor={eyeColor}
            gender={gender}
            hairColor={hairColor}
            height={height}
            mass={mass}
            skinColor={skinColor}
            homeworld={homeworld}
            heroImage={heroImage}
          />
        ),
      },
      position: { x: -500, y: 0 },
    },
  ];

  films.forEach((film, index) => {
    initialNodes.push({
      id: `film-${index}`,
      data: {
        label: <FilmNode filmName={film} />,
      },
      position: { x: -200, y: 100 + index * 200 },
    });
  });

  starships.forEach((starship, index) => {
    initialNodes.push({
      id: `starship-${index}`,
      data: {
        label: <StarshipNode name={starship} />,
      },
      position: { x: 200, y: 100 + index * 200 },
    });
  });

  const initialEdges: Edge[] = [];

  films.forEach((_, index) => {
    initialEdges.push({
      id: `e1-${index}`,
      source: 'hero',
      target: `film-${index}`,
      animated: false,
      style: { stroke: '#feea1e', strokeWidth: 2 },
    });
  });

  starships.forEach((_, starshipIndex) => {
    films.forEach((_, filmIndex) => {
      initialEdges.push({
        id: `e-film-${filmIndex}-starship-${starshipIndex}`,
        source: `film-${filmIndex}`,
        target: `starship-${starshipIndex}`,
        animated: false,
        style: { stroke: '#0047ab', strokeWidth: 2 },
      });
    });
  });

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
