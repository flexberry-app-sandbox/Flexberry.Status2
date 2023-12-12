import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  продажа: DS.attr('i-i-s-status-2-статус')
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-status-2-самолет.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-status-2-самолет.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СамолетE', 'i-i-s-status-2-самолет', {
    назв: attr('Назв', { index: 0 }),
    продажа: attr('Продажа', { index: 1 })
  });

  modelClass.defineProjection('СамолетL', 'i-i-s-status-2-самолет', {
    назв: attr('Назв', { index: 0 }),
    продажа: attr('Продажа', { index: 1 })
  });
};
