import { Grid } from 'react-loader-spinner';
import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <Grid height="120" width="120" color="#89939a" />
    </div>
  );
};
