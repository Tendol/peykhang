import { Maybe } from 'graphql/jsutils/Maybe';
import _ from 'lodash';

export default (
  firstName: Maybe<string> | undefined,
  lastName: Maybe<string> | undefined,
) => `${_.capitalize(firstName ?? '')} ${_.capitalize(lastName ?? '')}`;
