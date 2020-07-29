import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.kube-system.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
