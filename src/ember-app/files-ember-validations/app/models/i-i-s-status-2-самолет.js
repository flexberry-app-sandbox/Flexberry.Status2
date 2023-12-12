import {
  defineNamespace,
  defineProjections,
  Model as СамолетMixin
} from '../mixins/regenerated/models/i-i-s-status-2-самолет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СамолетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
