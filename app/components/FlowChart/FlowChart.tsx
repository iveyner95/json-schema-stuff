'use client'

import {
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import { FlowChartWithoutProviders } from './FlowChartWIthoutProviders';

export const FlowChart = () => {
  return (
    <ReactFlowProvider>
      <FlowChartWithoutProviders />
    </ReactFlowProvider>
  );
}
