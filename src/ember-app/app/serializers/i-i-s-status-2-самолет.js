import { Serializer as СамолетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-status-2-самолет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СамолетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
