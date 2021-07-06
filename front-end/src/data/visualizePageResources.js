import time from '../images-src/time.png';
import correl from '../images-src/correl.png';
import hist from '../images-src/hist.png';
import map from '../images-src/map.png';

const graphs = [
  { title: 'Distribution', type: 'histogram', image: hist },
  { title: 'Correlation', type: 'correlation', image: correl },
  { title: 'Space', type: 'map', image: map },
  { title: 'Time', type: 'time', image: time },
];

export default graphs;
