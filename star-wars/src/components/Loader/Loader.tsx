// Import the Grid component from the 'react-loader-spinner'
import { Grid } from 'react-loader-spinner';

import './Loader.scss';

// We declare the functional component Loader
export const Loader = () => {
  return (
    <div className="loader">
      {/* Render the Grid component with the specified size and color parameters */}
      <Grid height="120" width="120" color="#89939a" />
    </div>
  );
};
