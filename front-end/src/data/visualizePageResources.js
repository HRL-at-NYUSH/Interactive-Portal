import time from '@assets/visualize-page/time.png';
import correl from '@assets/visualize-page/correl.png';
import hist from '@assets/visualize-page/hist.png';
import map from '@assets/visualize-page/map.png';

const graphs = [
  { title: 'Distribution', type: 'histogram', image: hist },
  { title: 'Correlation', type: 'correlation', image: correl },
  { title: 'Space', type: 'map', image: map },
  { title: 'Time', type: 'time', image: time },
];

export default graphs;
