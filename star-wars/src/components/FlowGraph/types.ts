import type { Node, BuiltInNode } from '@xyflow/react';

// Визначаємо тип для нашого кастомного вузла
export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode;
