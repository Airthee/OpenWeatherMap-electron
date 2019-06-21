import _ from 'lodash';
import configEnv from './config.env';
import config from './config';

export default _.merge({}, config, configEnv);
