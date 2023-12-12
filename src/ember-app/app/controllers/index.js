import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.status-2.caption'),
          title: i18n.t('forms.application.sitemap.status-2.title'),
          children: [{
            link: 'i-i-s-status-2-самолет-l',
            caption: i18n.t('forms.application.sitemap.status-2.i-i-s-status-2-самолет-l.caption'),
            title: i18n.t('forms.application.sitemap.status-2.i-i-s-status-2-самолет-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})