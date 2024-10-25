import React from 'react';
import { ReactFlow, useNodesState, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './HeroFlow.scss';

interface HeroFlowProps {
  heroName: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
  films: string[];
  starships: string[];
  heroImage: string;
}

export const HeroFlow: React.FC<HeroFlowProps> = ({
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
          <div className="hero-node">
            <img src={heroImage} alt={heroName} className="hero-image" />
            <div className="hero-info">
              <p>{`Ім'я: ${heroName}`}</p>
              <p>{`Рік народження: ${birthYear}`}</p>
              <p>{`Колір очей: ${eyeColor}`}</p>
              <p>{`Стать: ${gender}`}</p>
              <p>{`Колір волосся: ${hairColor}`}</p>
              <p>{`Висота: ${height}`}</p>
              <p>{`Маса: ${mass}`}</p>
              <p>{`Колір шкіри: ${skinColor}`}</p>
              <p>{`Рідна планета: ${homeworld}`}</p>
            </div>
          </div>
        ),
      },
      position: { x: 250, y: 0 },
    },
  ];

  films.forEach((film, index) => {
    initialNodes.push({
      id: `film-${index}`,
      data: {
        label: (
          <div className="film-node">
            <p>{`Фільм: ${film}`}</p>
          </div>
        ),
      },
      position: { x: 100, y: 100 + index * 100 },
    });
  });

  starships.forEach((starship, index) => {
    initialNodes.push({
      id: `starship-${index}`,
      data: {
        label: (
          <div className="starship-node">Зірковий Корабель: {starship}</div>
        ),
      },
      position: { x: 400, y: 100 + index * 100 },
    });
  });

  const initialEdges: Edge[] = [];

  films.forEach((_, index) => {
    initialEdges.push({
      id: `e1-${index}`,
      source: 'hero',
      target: `film-${index}`,
      animated: true,
    });
  });

  starships.forEach((_, starshipIndex) => {
    films.forEach((_, filmIndex) => {
      initialEdges.push({
        id: `e-film-${filmIndex}-starship-${starshipIndex}`,
        source: `film-${filmIndex}`,
        target: `starship-${starshipIndex}`,
        animated: true,
      });
    });
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

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
