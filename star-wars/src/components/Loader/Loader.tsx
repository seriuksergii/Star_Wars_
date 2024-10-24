import { Grid } from 'react-loader-spinner';
import './Loader.scss'

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid height="80" width="80" color="#89939a" />
    </div>
  );
};
